// Genera iconos PNG personalizados (fondo de color + circulo con anillo) sin dependencias.
const zlib = require('zlib');
const fs = require('fs');
function crc32(buf){let c,crc=~0;for(let n=0;n<buf.length;n++){c=(crc^buf[n])&0xff;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;crc=(crc>>>8)^c;}return ~crc>>>0;}
function chunk(t,d){const l=Buffer.alloc(4);l.writeUInt32BE(d.length);const td=Buffer.concat([Buffer.from(t),d]);const c=Buffer.alloc(4);c.writeUInt32BE(crc32(td));return Buffer.concat([l,td,c]);}
function png(size,pixel){
  const raw=Buffer.alloc((size*4+1)*size);
  for(let y=0;y<size;y++){raw[y*(size*4+1)]=0;for(let x=0;x<size;x++){const [r,g,b,a]=pixel(x/size,y/size);const o=y*(size*4+1)+1+x*4;raw[o]=r;raw[o+1]=g;raw[o+2]=b;raw[o+3]=a;}}
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(size,0);ihdr.writeUInt32BE(size,4);ihdr[8]=8;ihdr[9]=6;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',zlib.deflateSync(raw)),chunk('IEND',Buffer.alloc(0))]);
}
const BG=[198,40,40,255], WHITE=[255,255,255,255], CLEAR=[0,0,0,0];
const d=(u,v)=>Math.hypot(u-.5,v-.5);
const logo=(u,v)=>{const r=d(u,v);return r<.16?WHITE:(r>.24&&r<.30?WHITE:null);};
const fg=(u,v)=>{const r=d(u,v);return (r<.12||(r>.18&&r<.22))?WHITE:CLEAR;};
const out='assets/';
fs.writeFileSync(out+'icon.png',png(1024,(u,v)=>logo(u,v)||BG));
fs.writeFileSync(out+'splash-icon.png',png(1024,(u,v)=>logo(u,v)||CLEAR));
fs.writeFileSync(out+'android-icon-foreground.png',png(1024,fg));
fs.writeFileSync(out+'android-icon-background.png',png(1024,()=>BG));
fs.writeFileSync(out+'android-icon-monochrome.png',png(1024,(u,v)=>fg(u,v)===WHITE?[0,0,0,255]:CLEAR));
fs.writeFileSync(out+'favicon.png',png(48,(u,v)=>logo(u,v)||BG));

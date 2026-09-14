import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.mp4':'video/mp4'};
http.createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!file.startsWith(root) || !(await stat(file)).isFile()){res.writeHead(404);res.end('Not found');return;}
    const body=await readFile(file);
    const headers={'Content-Type':mime[path.extname(file)]||'application/octet-stream','Accept-Ranges':'bytes'};
    // Media seeking uses native HTTP range requests.
    if(req.headers.range){
      const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
      const start=match ? Number(match[1]) : NaN;
      const end=match && match[2] ? Math.min(Number(match[2]),body.length-1) : body.length-1;
      if(!Number.isSafeInteger(start)||start>end){res.writeHead(416,{'Content-Range':`bytes */${body.length}`});res.end();return;}
      res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${body.length}`,'Content-Length':end-start+1});res.end(body.subarray(start,end+1));return;
    }
    res.writeHead(200,{...headers,'Content-Length':body.length});res.end(body);
  } catch(error){res.writeHead(error instanceof URIError ? 400 : 404);res.end('Not found');}
}).listen(5187,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:5187'));

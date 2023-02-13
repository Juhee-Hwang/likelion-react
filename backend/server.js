import liveServer from "live-server";
import { resolve } from "node:path";
import { argv } from "node:process";
import parseArgv from "./parseArgv.js";

/* directories -------------------------------------------------------------- */

const frontendDir = resolve("frontend");

const DIR = {
  public: resolve(frontendDir, "public"),
  src: resolve(frontendDir, "src"),
};

/* parameters --------------------------------------------------------------- */

let params = {
  host: "localhost",
  port: 3000,
  root: DIR.public,
  file: "index.html", // entry point(file)
  mount: [["/scripts", DIR.src]],
  open: false,
  wait: 200,
};

const customParams = parseArgv(argv);

// Q. 이 구문의 정체는?
// 전개구문 (spread syntax)
// 객체 합성
// Q. 객체 합성 할 때 자주 사용되었던 이전의 기술은?
// Object.assign() 클래스 메서드 (static method)
// Q. Object.prototype.toString() 이런것 처럼 인스턴스 메서드
// 정적 메서드. static method
params = { ...params, ...customParams };

/* start server ------------------------------------------------------------- */

liveServer.start({ ...params, ...customParams });

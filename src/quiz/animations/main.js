var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var aliceTumbling1 = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];
var aliceTiming1 = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
};
/*
// ORIGINAL CODE
const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

if (alice10 && alice20 && alice30) {
  // Promise chain
  alice10
    .animate(aliceTumbling1, aliceTiming1)
    .finished.then(() => {
      return alice20.animate(aliceTumbling1, aliceTiming1).finished;
    })
    .then(() => {
      return alice30.animate(aliceTumbling1, aliceTiming1).finished;
    })
    .catch((err) => alert(`Error when promising ... ${err.message}`));
} else {
  console.warn("#alice not found");
}
// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
*/
/*
// VERS 1
const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

async function animateAlice(alice: HTMLElement): Promise<Animation> {
  console.log("animating an Alice...");
  try {
    const result = await alice.animate(aliceTumbling1, aliceTiming1).finished;
    console.log(result);
    return result; // equivalent to resolve(result);
  } catch (err) {
    throw new Error(`Failure: ${err}`);
  }
}

// keyword async before a function means that the function will return a Promise
async function run(): Promise<void> {
  console.log("Begin run ... ");
  if (alice10 && alice20 && alice30) {
    try {
      const animated1 = await animateAlice(alice10);
      const animated2 = await animateAlice(alice20);
      const animated3 = await animateAlice(alice30);

      console.log("All animations complete.");
    } catch (err) {
      if (err instanceof Error) {
        console.log(`Failure: ${err.message}`);
      }
    }
  } else {
    console.warn("#alice not found");
  }
}

run();
console.log("End main thread.");
*/
// VERS 2
var alice10 = document.querySelector("#alice1");
var alice20 = document.querySelector("#alice2");
var alice30 = document.querySelector("#alice3");
function animateAlice(alice) {
    try {
        return alice.animate(aliceTumbling1, aliceTiming1).finished;
    }
    catch (err) {
        throw new Error("Failure: ".concat(err));
    }
}
// keyword async before a function means that the function will return a Promise
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Begin run ... ");
                    if (!(alice10 && alice20 && alice30)) return [3 /*break*/, 7];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, animateAlice(alice10)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, animateAlice(alice20)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, animateAlice(alice30)];
                case 4:
                    _a.sent();
                    console.log("All animations complete.");
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    if (err_1 instanceof Error) {
                        console.log("Failure: ".concat(err_1.message));
                    }
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 8];
                case 7:
                    console.warn("#alice not found");
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
run();
console.log("End main thread.");

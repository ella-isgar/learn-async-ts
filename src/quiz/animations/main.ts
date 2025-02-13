const aliceTumbling1: Keyframe[] = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming1: KeyframeEffectOptions = {
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
const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

function animateAlice(alice: HTMLElement): Promise<Animation> {
  try {
    return alice.animate(aliceTumbling1, aliceTiming1).finished;
  } catch (err) {
    throw new Error(`Failure: ${err}`);
  }
}

// keyword async before a function means that the function will return a Promise
async function run(): Promise<void> {
  console.log("Begin run ... ");
  if (alice10 && alice20 && alice30) {
    try {
      await animateAlice(alice10);
      await animateAlice(alice20);
      await animateAlice(alice30);
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

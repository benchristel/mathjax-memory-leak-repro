import {mathjax} from "mathjax-full/js/mathjax.js";
import {TeX} from "mathjax-full/js/input/tex.js";
import {CHTML} from "mathjax-full/js/output/chtml.js";
import {browserAdaptor} from "mathjax-full/js/adaptors/browserAdaptor.js";
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html.js";

// MathJax Packages
import "mathjax-full/js/input/tex/textmacros/TextMacrosConfiguration.js";

function startTest(shouldUseTextmacros) {
    RegisterHTMLHandler(browserAdaptor());

    const chtmlOutput = new CHTML({})
    const texInput = new TeX({
        packages: [
            "base",
            ...(shouldUseTextmacros ? ["textmacros"] : []),
        ],
        formatError(jax, err) {
            return jax.formatError(err);
        },
    })

    const doc = mathjax.document("", {
        InputJax: texInput,
        OutputJax: chtmlOutput,
    });

    setInterval(() => {
        doc.convert("\\text{yadda yadda yadda}", {display: false})
        console.log(`rendered ${shouldUseTextmacros ? "with" : "without"} textmacros`);
    }, 1)
}

document.getElementById("start-with-textmacros")
    .addEventListener("click", () => startTest(true))
document.getElementById("start-without-textmacros")
    .addEventListener("click", () => startTest(false))

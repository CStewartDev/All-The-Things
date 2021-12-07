import { createHtmlElement } from "./createElHelper";
import gh from "./images/GitHub.png";

const render = () => {
    const footer = document.createElement('footer');
    const para = createHtmlElement("p",null,null,"2021 CStewartDev");
    const link = document.createElement('a');
    link.href = "https://github.com/CStewartDev";
    const img = new Image();
    img.src = gh;
    link.append(img)
    footer.append(para,link);
    return footer;
}

export {render as renderFooter}
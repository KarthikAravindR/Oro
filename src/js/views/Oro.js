let oro = [
    { name: "Kannan", partnerid: "OMA00005", mobile: "9988776655", status: "OMV0003" },
    { name: "Kannan", partnerid: "OMA00005", mobile: "9988776655", status: "OMV0003" },
    { name: "Kannan", partnerid: "OMA00005", mobile: "9988776655", status: "OMV0003" },
    { name: "Kannan", partnerid: "OMA00005", mobile: "9988776655", status: "OMV0003" },
    { name: "Kannan", partnerid: "OMA00005", mobile: "9988776655", status: "OMV0003" },
]

// let nav = ""
// for (let i = 0; i < oro.length; i++) {
//     nav+="<section>";
//     nav+="<p>"+oro[i].name+"</p>";
//     nav+="<p>"+oro[i].partnerid+" | "+oro[i].mobile+"</p>";
//     nav+="<p><i class='fas fa-circle'></i>"+oro[i].status+"</p>";
//     nav+="<div class='section_arrow'><i class='fas fa-chevron-right'></i></div>";
//     nav+="</section>";
// }
// document.getElementById("navigation").innerHTML = nav;
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Oro");
    }

    async getHtml() {
        return `
            <div class="main_default_content">
                <p><strong>WELCOME TO ORO</strong></p>
            </div>
        `;
    }
}

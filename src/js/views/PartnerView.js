import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.partnerId = params.id;
        this.setTitle("Partner");
        this.oro = [
            { name: "Kannan", partnerid: "OMA00007", mobile: "9988776655", status: "VISIT OMV00035" },
            { name: "Sivasubramaniyan K", partnerid: "OMA00005", mobile: "9988776655", status: " VISIT OMV00033" },
            { name: "Jayaram S", partnerid: "OMA00011", mobile: "9988776655", status: "IDLE" },
            { name: "Saravanan C", partnerid: "OMA00006", mobile: "9988776655", status: "IDLE" },
            { name: "Srekesh K", partnerid: "OMA00028", mobile: "9988776655", status: "INACTIVE" },
        ]
    }

    async getHtml() {
        let partnerIndex = this.oro.findIndex(p => p.partnerid === this.partnerId)
        let displaypartner = this.oro[partnerIndex]       
        return `
        <div class="main_content">
            <p><strong>PARTNER DETAILS</strong></p>
            <div id="PartnerDetails" class="main_content_details">
                <div class="main_content_detail_one">
                    <div class="main_content_title">NAME</div>
                    <div class="main_content_value">${displaypartner.name}</div>
                </div>
                <div class="main_content_detail_one">
                    <div class="main_content_title">PARTNER ID</div>
                    <div class="main_content_value">${displaypartner.partnerid}</div>
                </div>
                <div class="main_content_detail_one">
                    <div class="main_content_title">MOBILE NUMBER</div>
                    <div class="main_content_value">${displaypartner.mobile}</div>
                </div>
                <div class="main_content_detail_one">
                    <div class="main_content_title">STATUS</div>
                    <div class="main_content_value"><i class="fas fa-circle"></i>${displaypartner.status}</div>
                </div>
                <div class="main_content_detail_two">
                    <button>Call Partner</button>
                </div>
            </div>
            <div id="map" class="main_map">
            
            </div>
            <div class="main_directions">
                <div class="main_directions_details">
                    <div class="main_directions_detail">
                    <div class="main_directions_title">STOP NO.</div>
                    <div class="main_directions_value">1</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LAT</div>
                    <div class="main_directions_value">13.0565342</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LONG</div>
                    <div class="main_directions_value">80.965426</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">TIME</div>
                    <div class="main_directions_value">01.53 PM</div>
                    </div>
                </div>
                <div class="main_directions_details">
                    <div class="main_directions_detail">
                    <div class="main_directions_title">STOP NO.</div>
                    <div class="main_directions_value">1</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LAT</div>
                    <div class="main_directions_value">13.0565342</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LONG</div>
                    <div class="main_directions_value">80.965426</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">TIME</div>
                    <div class="main_directions_value">01.53 PM</div>
                    </div>
                </div>
                <div class="main_directions_details">
                    <div class="main_directions_detail">
                    <div class="main_directions_title">STOP NO.</div>
                    <div class="main_directions_value">1</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LAT</div>
                    <div class="main_directions_value">13.0565342</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LONG</div>
                    <div class="main_directions_value">80.965426</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">TIME</div>
                    <div class="main_directions_value">01.53 PM</div>
                    </div>
                </div>
                <div class="main_directions_details">
                    <div class="main_directions_detail">
                    <div class="main_directions_title">STOP NO.</div>
                    <div class="main_directions_value">1</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LAT</div>
                    <div class="main_directions_value">13.0565342</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">LONG</div>
                    <div class="main_directions_value">80.965426</div>
                    </div>
                    <div class="main_directions_detail">
                    <div class="main_directions_title">TIME</div>
                    <div class="main_directions_value">01.53 PM</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
import React, { useState } from "react";
import "./SendMessage.css";
import Select from "react-select";
const SendMessage = () => {


  const [value, setvalue] = useState(null);

  const handleChange = (selectedOption) => {
    setvalue(selectedOption);
  };




  const [selectedOption, setSelectedOption] = useState(null);

  const toggleRadiobuttonhandle = (event) => {
    const { checked, value } = event.target;
    const newValue = checked ? value : null;
    setSelectedOption(newValue);
    console.log(newValue);
  };


  const options = [
    { value: '8972976467', label: '8972976467' },
    { value: '9867456723', label: '9867456723' },
    { value: '7634214565', label: '7634214565' },
    { value: '8902786345', label: '8902786345' },
    { value: '8765347863', label: '8765347863' }
  ]


  return (
    <div className="sendmessage">
      <div style={{ display: "flex", backgroundColor: "gray" }}>
        <h2 style={{ marginLeft: "8px" }}>Send Message via</h2>
        <div style={{ marginTop: "16px", marginLeft: "10px" }}>
          <div
            className="custom-control custom-radio custom-control-inline"
            style={{ bottom: "4px" }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="roboticsRadio"
              name="sendMessageVia"
              value="Robotics"
              onChange={toggleRadiobuttonhandle}
            />
            <label className="custom-control-label" htmlFor="roboticsRadio">
              <h5>Robotics</h5>
            </label>
          </div>

          <div
            className="custom-control custom-radio custom-control-inline"
            style={{ bottom: "4px" }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="facebookRadio"
              name="sendMessageVia"
              value="FacebookOfficial"
              onChange={toggleRadiobuttonhandle}
            />
            <label className="custom-control-label" htmlFor="facebookRadio">
              <h5>FacebookOfficial</h5>
            </label>
          </div>

          <div
            className="custom-control custom-radio custom-control-inline"
            style={{ bottom: "4px" }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="twilioRadio"
              name="sendMessageVia"
              value="Twilio"
              onChange={toggleRadiobuttonhandle}
            />
            <label className="custom-control-label" htmlFor="twilioRadio">
              <h5>Twillio</h5>
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", backgroundColor: "#D3D3D3", marginTop: "8px" }}>
        <h2 style={{ marginLeft: "8px" }}>Send to</h2>
        <div style={{ marginTop: "16px", marginLeft: "10px" }}>
          <div
            className="custom-control custom-radio custom-control-inline"
            style={{ bottom: "4px" }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="individualRadio"
              name="sendTo"
              value="Individual"
              onChange={toggleRadiobuttonhandle}
            />
            <label className="custom-control-label" htmlFor="individualRadio">
              <h5>Individual</h5>
            </label>
          </div>

          <div
            className="custom-control custom-radio custom-control-inline"
            style={{ bottom: "4px" }}
          >
            <input
              type="radio"
              className="custom-control-input"
              id="bulkRadio"
              name="sendTo"
              value="Bulk"
              onChange={toggleRadiobuttonhandle}
            />
            <label className="custom-control-label" htmlFor="bulkRadio">
              <h5>Bulk</h5>
            </label>
          </div>
        </div>
      </div>
      {selectedOption === "Individual"?
    
      <input type="text" className="form-control" placeholder="Enter Mobile No." defaultValue="Enter Mobile No+91..." style={{marginTop:'20px'}}/>  :null}
    
    {selectedOption === "Bulk"?<div style={{minHeight:'500px'}}>
    <h3>Select an option:</h3>
    <Select
      isClearable
      isSearchable
      value={value}
      onChange={handleChange}
      options={options}
    />
    
    
    <div id="content" class="main-content sendmessage" style={{width:'1000px'}}>


    <div class="container-fluid">

        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget widget-card-two">
                <div class="widget-content row">
                    <div class="col-md-4">
                        <div class="media">
                            <div class="w-img">
                                <img src="https://mkt.msgclub.in/img/message-icon.svg" alt="avatar"/>
                            </div>
                            <div class="media-body">
                                <h6>Wapp Btn Message</h6>
                                <p class="meta-date-time">send btn wa message</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        
                        <span id="totalpno"></span>
                    </div>
                </div>

                <div class="card-bottom-section">

                    <form id="quickmessage" action="#">

                        <div class="form-row">
                            <div class="col-lg-3 col-md-3 col-sm-12">

                                <label class="form-label">Numbers</label>
                                <textarea rows="20" class="form-control col-12 col-sm-12 form-control-sm" id="tonumber" name="tonumber" type="text" data-toggle="tooltip" data-placement="right" title="" data-original-title="Copy Paste Number from any text/XLS/XLSX files"></textarea>
                            </div>
                            <div class="col-lg-9 col-md-9 col-sm-12">


                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text bg-danger">Campname</div>
                                    </div>
                                    <input type="text" class="form-control form-control-sm" id="campname" name="campname"/>
                                </div>

                                
                                <textarea rows="5" class="form-control col-12 col-sm-12" placeholder="text message" id="msg" name="msg" type="text"></textarea>


                                <div class="d-grid gap-3">

                                    <div class="p-2">
                                        <div class="form-row">

                                            <div class="col-md-4 col-sm-12">
                                                

                                                    <div class="filepond--root filepond--hopper" id="attimg1" data-style-button-remove-item-position="left" data-style-button-process-item-position="right" data-style-load-indicator-position="right" data-style-progress-indicator-position="right" data-style-button-remove-item-align="false" style={{height: '76px'}}><input class="filepond--browser" type="file" id="filepond--browser-44brh80sd" name="file" aria-controls="filepond--assistant-44brh80sd" aria-labelledby="filepond--drop-label-44brh80sd" accept="image/png,image/jpeg" multiple=""/><div class="filepond--drop-label" style={{transform: 'translate3d(0px, 0px, 0px)', opacity: '1'}}><label for="filepond--browser-44brh80sd" id="filepond--drop-label-44brh80sd" aria-hidden="true">Drag &amp; Drop image(maximum 4) <span class="filepond--label-action" tabindex="0">Click to Browse  Image</span></label></div><div class="filepond--list-scroller" style={{transform: 'translate3d(0px, 60px, 0px)'}}><ul class="filepond--list" role="list"></ul></div><div class="filepond--panel filepond--panel-root" data-scalable="true"><div class="filepond--panel-top filepond--panel-root"></div><div class="filepond--panel-center filepond--panel-root" style={{transform: 'translate3d(0px, 8px, 0px) scale3d(1, 0.6, 1)'}}></div><div class="filepond--panel-bottom filepond--panel-root" style={{transform: 'translate3d(0px, 68px, 0px)'}}></div></div><span class="filepond--assistant" id="filepond--assistant-44brh80sd" role="status" aria-live="polite" aria-relevant="additions"></span><fieldset class="filepond--data"></fieldset><div class="filepond--drip"></div></div>
                                                    <h5>Image Upload
                                                        <h7 style={{color:'red'}}>(Max file size 1 MB.)</h7>
                                                    </h5>
                                            </div>
                                            <div class="col-md-4 col-sm-12">
                                                <form role="form" id="fileupload1" method="POST" enctype="multipart/form-data">

                                                    <div class="filepond--root filepond--hopper" id="attvideo" data-style-button-remove-item-position="left" data-style-button-process-item-position="right" data-style-load-indicator-position="right" data-style-progress-indicator-position="right" data-style-button-remove-item-align="false" style={{height: '76px'}}><input class="filepond--browser" type="file" id="filepond--browser-zkqnhcqu5" name="file" aria-controls="filepond--assistant-zkqnhcqu5" aria-labelledby="filepond--drop-label-zkqnhcqu5" accept="video/mp4,video/3gpp,video/x-msvideo"/><div class="filepond--drop-label" style={{transform: 'translate3d(0px, 0px, 0px)', opacity: '1'}}><label for="filepond--browser-zkqnhcqu5" id="filepond--drop-label-zkqnhcqu5" aria-hidden="true">Drag &amp; Drop Video files(max size:3 MB) or <span class="filepond--label-action" tabindex="0">Click to Browse Video </span></label></div><div class="filepond--list-scroller" style={{transform: 'translate3d(0px, 0px, 0px)'}}><ul class="filepond--list" role="list"></ul></div><div class="filepond--panel filepond--panel-root" data-scalable="true"><div class="filepond--panel-top filepond--panel-root"></div><div class="filepond--panel-center filepond--panel-root" style={{transform: 'translate3d(0px, 8px, 0px) scale3d(1, 0.6, 1)'}}></div><div class="filepond--panel-bottom filepond--panel-root" style={{transform: 'translate3d(0px, 68px, 0px)'}}></div></div><span class="filepond--assistant" id="filepond--assistant-zkqnhcqu5" role="status" aria-live="polite" aria-relevant="additions"></span><fieldset class="filepond--data"></fieldset><div class="filepond--drip"></div></div>
                                                    <h5>Video Upload
                                                        <h7 style={{color:'red',fontSize: '12px'}}>(Max file size 3 MB.)
                                                        </h7>
                                                    </h5>

                                                </form>
                                            </div>


                                            <div class="col-md-4 col-sm-12">
                                                <form role="form" id="fileupload2" method="POST" enctype="multipart/form-data">

                                                    <div class="filepond--root filepond--hopper" id="attpdf" data-style-button-remove-item-position="left" data-style-button-process-item-position="right" data-style-load-indicator-position="right" data-style-progress-indicator-position="right" data-style-button-remove-item-align="false" style={{height: '76px'}}><input class="filepond--browser" type="file" id="filepond--browser-qa08h4yis" name="file" aria-controls="filepond--assistant-qa08h4yis" aria-labelledby="filepond--drop-label-qa08h4yis" accept="application/pdf"/><div class="filepond--drop-label" style={{transform: 'translate3d(0px, 0px, 0px)', opacity:' 1'}}><label for="filepond--browser-qa08h4yis" id="filepond--drop-label-qa08h4yis" aria-hidden="true">Drag &amp; Drop PDF file(max size:1 MB) or <span class="filepond--label-action" tabindex="0"> Browse PDF </span></label></div><div class="filepond--list-scroller" style={{transform: 'translate3d(0px, 0px, 0px)'}}><ul class="filepond--list" role="list"></ul></div><div class="filepond--panel filepond--panel-root" data-scalable="true"><div class="filepond--panel-top filepond--panel-root"></div><div class="filepond--panel-center filepond--panel-root" style={{transform: 'translate3d(0px, 8px, 0px) scale3d(1, 0.6, 1)'}}></div><div class="filepond--panel-bottom filepond--panel-root" style={{transform: 'translate3d(0px, 68px, 0px)'}}></div></div><span class="filepond--assistant" id="filepond--assistant-qa08h4yis" role="status" aria-live="polite" aria-relevant="additions"></span><fieldset class="filepond--data"></fieldset><div class="filepond--drip"></div></div>
                                                    <h5>PDF
                                                        <h7 style={{color:'red'}}>(Max file size 2 MB.)</h7>
                                                    </h5>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <input type="hidden" class="form-control col-2 form-control-sm" id="lcap" value="Visit Now" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="Link Button Caption"/>
                                    <input type="hidden" class="form-control form-control-sm" id="link" placeholder="http://" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="HTTP URL .Must Start With http:// or https://"/>
                                    
                                    
                                    
                                    <input type="hidden" class="form-control col-2 form-control-sm" id="cbtncap" value="Call Now" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="Call Button Caption"/>
                                    <input type="hidden" class="form-control form-control-sm" id="callno" placeholder="10 Digit number" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="10 Digit Mobile Number"/>
                                    

                                    <div class="form-row">
                                        <div class="col-md-4">
                                            <button class="btn btn-primary btn-lg btnsndnow" id="btnsndnow" type="button" onclick="saveWhatsapp(0)">Submit Now
                                            </button>

                                            <button class="btn btn-primary btn-lg btnsndnow" id="btnsndnowdp" type="button" onclick="saveWhatsapp(3)">Submit with DP
                                            </button>

                                            
                                            <div id="hiddenschedule" style={{display: 'none'}}>
                                                <input type="text" class="form-control flatpickr-input" name="scheduledDate" id="scheduledDate" readonly="readonly"/>
                                            </div>


                                        </div>


                                        
                                        <div class="col-md-6"><label class="label" data-toggle="tooltip" title="" data-original-title="Change your dp.Mininum 25000 number required to activate DP">
                                            <img class="rounded" id="avatar" style={{width: '150px' }} src="https://mkt.msgclub.in/img/sedpmq.png" alt="img/yourdphere.png" onerror="this.src='../img/sedpmq.png';"/>
                                            <input type="file" class="sr-only" id="input" name="image" accept="image/*"/>
                                        </label></div>

                                        
                                    </div>


                                    
                                    
                                    <input type="hidden" class="form-control col-2 form-control-sm" id="btn3cap" value="Whatsapp Now" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="WAPP Me Button"/>
                                    <input type="hidden" class="form-control col-2 form-control-sm" id="btn3numb" placeholder="WA number with Country Code" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="WA number with Country Code.Ex. 919999999999"/>
                                    <input type="hidden" class="form-control form-control-sm" placeholder="Whatsapp message" id="btn3msg" value="Hii" data-toggle="tooltip" data-placement="top" title="" disabled="disabled" data-original-title="message"/>
                                    
                                    </div>
                                </div>


                            </div></form>


                </div>
                

            </div>
        </div>
    </div>
</div>
  






  </div>:null}
    </div>
  );
};

export default SendMessage;

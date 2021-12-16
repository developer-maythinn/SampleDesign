import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="social-media">
            <a
              rel="noreferrer"
              aria-label="VenusLab Facebook page"
              target="_blank"
              href="https://www.facebook.com/venuslab.co"
              className="social facebook svelte-1qome1k"
            >
              facebook
            </a>
            <a
              rel="noreferrer"
              aria-label="VenusLab LinkedIn Page"
              target="_blank"
              href="https://www.linkedin.com/company/venuslab"
              className="social linkedin svelte-1qome1k"
            >
              linkedin
            </a>
          </div>

          <div className="contact-container">
            <a target="_blank" className="contact" href="tel:+959 972 709 001">
              +959 972 709 001
            </a>
            <span></span>
            <a
              target="_blank"
              className="contact svelte-1qome1k"
              href="mailto:nwaung@venuslab.co"
            >
              nwaung@venuslab.co
            </a>
          </div>
          <div className="contact-container">
            <a target="_blank" className="contact svelte-1qome1k" href="/">
              No.204, 8th Floor, Tower A, The Leaf Residence, <br />
              Dama Thukha Kyaung Lane, Hlaing Township, Yangon.
            </a>
          </div>
          <div className="contact-container copy svelte-1qome1k">
            © 2019 VenusLab.
          </div>
        </div>
      </footer>

      <style>
        {`
            footer{
                background-color: #eee;
            
            }
            .container{
                width: 100%;
                max-width: var(--large-width);
                padding: 20px;
                margin: 0 auto;
            }
            .social-media {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .contact-container{
                margin: 5px 0;
                font-size: .8em;
                text-align: center;
            }
            .contact {
                text-decoration: none;
                color: #333;
            }
            .contact-container span {
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #666;
                margin: 0 2px;
            }
            .copy {
                margin-top: 20px;
            }
            .facebook {
                background-image: url(https://venuslab.co/icons/social/facebook.svg);
            }
            .linkedin {
                background-image: url(https://venuslab.co/icons/social/linkedin.svg);
            }
            .social {
                --size: 36px;
                display: block;
                width: var(--size);
                height: var(--size);
                margin: 5px 15px 15px;
                background-size: 70%;
                background-repeat: no-repeat;
                background-position: center;
                opacity: .6;
                color: transparent;
                overflow: hidden;
            }
            @media (min-width: 768px){
                .container {
                    padding: 40px 20px;
                }
                .contact-container br {
                    display: none;
                }
                .social {
                    --size: 42px;
                }
            }
      `}
      </style>
    </>
  );
}

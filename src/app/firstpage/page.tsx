import Animate from "../animatepage/page";
import Client from "../clientpage/page";
import Partners from "../partnerpage/page";
import Testimonials from "../testimonials/page";

export default function FirstComponent(){
    return(
        <div >
            <h1>
                <Animate />
                <Client />
                <Partners />
                <Testimonials />

            </h1>
        </div>
    )
}
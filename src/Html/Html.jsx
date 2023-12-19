import Image from './Images/pk.jpg'
import Audio1 from './audio/music.mp3'
function html(){
    return(
        <div>
            <h1>Welcome to React Html</h1>
            <img src='https://cdn.pixabay.com/photo/2023/11/25/01/52/gifts-8410915_640.jpg' alt="" height={'400px'} width={'49%'}/>
            <img src={Image} alt="" height={'400px'} width={'49%'}/>
            <audio src={Audio1} controls autoPlay loop muted></audio>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aa7_itx64eI?si=pSEYLTuVu2oz9GSw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15133.985616396763!2d73.9137012!3d18.5064567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1702443559159!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>

            <table border={1} bgcolor='skyblue' rules={'all'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>pallavi</td>
                        <td>pallavi@gmail.com</td>
                        <td>009977</td>
                    </tr>
                    <tr>
                        <td>pallavi</td>
                        <td>pallavi@gmail.com</td>
                        <td>009977</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>@copy write with---</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default html



document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        
        dateFormat: "y-d-m"
        
    });
    changeContent('home')
});



function changeContent(page) {
    var contentDiv = document.getElementById('content');
    
    switch (page) {
        //------------Home tag------------//
        case 'home':
            pageContent = `
                <section class="home" id="home">
    <h1 id="fs">Featured Staffs</h1>
    <div class="container">
        <div class="professor-card">
            <img src="staff-images/Dr. Birmohan Singh.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Birmohan Singh</h1>
            <h3>education :Ph.D., M.E.</h3>
            <p>birmohans@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Amar Nath.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Amar Nath</h1>
            <h3>education : Ph.D., M. Tech.</h3>
            <p>amarnath@sliet.ac.in</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Gurjinder Kaur.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Gurjinder Kaur</h1>
            <h3>education : B.E. M.S. Ph.D.</h3>
            <p>gurjinder13@yahoo.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Jagdeep Singh.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Jagdeep Singh</h1>
            <h3>education : Ph.D., M.Tech.</h3>
            <p>jagdeepknit@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Major Singh Goraya.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Major Singh Goraya</h1>
            <h3> education : Ph.D., M.Tech, B.Tech.</h3>
            <p>mjrsingh@yahoo.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Manminder Singh.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Manminder Singh</h1>
            <h3>education : ".Tech, M.Tech, Ph. D </h3>
            <p>manminderldh@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Manoj Sachan.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Manoj Sachan</h1>
            <h3>education : B.Tech, M.E, Ph.D</h3>
            <p>manojsachan@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Preetpal Kaur Buttar.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Preetpal Kaur Buttar</h1>
            <h3> education : PhD </h3>
            <p> preetpal@sliet.ac.in</p>

        </div>
    </div>
    

</section>`;
            break;
            //---------Professor tag----------/
       
        case 'Professors':
            pageContent = `
                <section>
    <h1 id="fs">Professors</h1>
    <div class="container">
        <div class="professor-card">
            <img src="staff-images/Dr. Birmohan Singh.jpg" style="width: 200px; height: 200px" />
            
            <h1>Dr. Birmohan Singh,</h1>
            <h3>education : Ph.D., M.E.</h3>
            <p>birmohans@gmail.com,</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Amar Nath.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Amar Nath</h1>
            <h3>education : Ph.D., M. Tech.</h3>
            <p> amarnath@sliet.ac.in</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Gurjinder Kaur.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Gurjinder Kaur</h1>
            <h3>education : B.E. M.S. Ph.D.</h3>
            <p> gurjinder13@yahoo.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Jagdeep Singh.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Jagdeep Singh</h1>
            <h3>education : Ph.D., M.Tech.</h3>
            <p>jagdeepknit@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Major Singh Goraya.jpg" style="width: 200px; height: 200px" />
            <h1>  Dr. Major Singh Goraya</h1>
            <h3> education : Ph.D., M.Tech, B.Tech.</h3>
            <p> mjrsingh@yahoo.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Manminder Singh.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Manminder Singh</h1>
            <h3>education : ".Tech, M.Tech, Ph. D </h3>
            <p> manminderldh@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Manoj Sachan.jpg" style="width: 200px; height: 200px" />
            <h1>Dr. Manoj Sachan</h1>
            <h3>education : B.Tech, M.E, Ph.D</h3>
            <p>manojsachan@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Preetpal Kaur Buttar.jpg" style="width: 200px; height: 200px" />
            <h1>  Dr. Preetpal Kaur Buttar</h1>
            <h3> education : PhD </h3>
            <p>  preetpal@sliet.ac.in</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Tajinder Singh.jpg" style="width: 200px; height: 200px" />
            <h1>  Dr. Tajinder Singh</h1>
            <h3>education : Ph.D </h3>
            <p> tajindersingh@sliet.ac.in </p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Utkarsh.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. Utkarsh</h1>
            <h3> education : Ms </h3>


        </div>
        <div class="professor-card">   
            <img src="staff-images/Dr. VINOD KUMAR VERMA.jpg" style="width: 200px; height: 200px" />
            <h1> Dr. VINOD KUMAR VERMA</h1>
            <p> vinod5881@gmail.com</p>

        </div>
        <div class="professor-card">
            <img src="staff-images/Dr. Jagdeep Singh.jpg" style="width: 200px; height: 200px" />
            <h1> Jagdeep Singh</h1>
            <h3> education : PhD </h3>
            <p> jagdeepknit@gmail.com</p>

        </div>
    </div>
    
</section>`;
            break;

            //--------- Mybookings tag--------//
        case 'MyBookings':  
            pageContent = `
                <section id="booking-section">
                    <h2>No bookings made</h2>
                </section>`;
            break;
        
            //-----------aboutUs tag------------//
        case 'AboutUs':
            pageContent =getAboutUsContent();
            break;

            //----------login tag---------//
            case 'login':
            pageContent = `
                <section id="login-section">
                    <h2>login will be updated soon</h2>
                </section>`;
            break;

        
        default:
            pageContent = `<h2>Page not found!</h2>`;
    }

    contentDiv.innerHTML = `
        <div class="centered-content">
            ${pageContent}
        </div>
    `;
}

function getAboutUsContent() {
    return `
        <section id="about-us">
    <div class="about-header">
        <h1>About SLIET</h1>
        <p class="tagline">Empowering Minds, Shaping Futures</p>
    </div>
    
    <div class="about-content">
        <div class="card history">
            <h2>Our History</h2>
            <p>Established in 1989 by the Ministry of Human Resource and Development, Sant Longowal Institute of Engineering and Technology (SLIET) was inaugurated on December 20, 1991. It stands as a tribute to the revered saint, Sant Longowal.</p>
        </div>
        
        <div class="card vision">
            <h2>Our Vision</h2>
            <p>SLIET aims to be an international podium for the development and transfer of technical competence in academics, with a commitment to providing the best possible technical education and catering to industry requirements.</p>
        </div>
        
        <div class="card governance">
            <h2>Governance</h2>
            <p>An autonomous body fully funded by the Government of India, SLIET is controlled by the SLIET society, registered under the Societies Registration Act, 1860.</p>
        </div>
        
        <div class="card programs">
            <h2>Academic Programs</h2>
            <p>SLIET offers Certificates, Diplomas, Undergraduate and Postgraduate programs approved by AICTE, New Delhi. The institute has also initiated Ph.D. programs after attaining the status of a Deemed University.</p>
        </div>

        <div class="card mission">
            <h2>Our Mission</h2>
            <p>Beyond formal education, SLIET is dedicated to preparing skilled and qualified manpower for self-employment, undertaking strategic research and development, and promoting entrepreneurship.</p>
        </div>
        
        <div class="card campus">
            <h2>Our Campus</h2>
            <p>Spread across 451 acres of lush green land provided by the Punjab Government, SLIET's campus is a picturesque landscape featuring numerous buildings, metal road networks, and all amenities required for a complete township.</p>
        </div>
    </div>
</section>

    `;
}







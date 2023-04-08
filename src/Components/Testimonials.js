import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            rating: 5,
            name: "Chloe",
            review: "\"I recently visited Lemon restaurant and was blown away by the quality of the food and service. From the moment I walked in, I was greeted with a warm welcome and made to feel right at home.\"",
            photo: "https://media.istockphoto.com/id/1278978817/pl/zdj%C4%99cie/portret-szcz%C4%99%C5%9Bliwego-dojrza%C5%82ego-m%C4%99%C5%BCczyzny-u%C5%9Bmiechni%C4%99tego.jpg?s=2048x2048&w=is&k=20&c=rqvanJwgkDPRsm1-z7JPAqlUrczInKoAAv-Bu7c6r5w="
        },
        {
            rating: 5,
            name: "Ethan",
            review: "\"I've been a regular at Lemon restaurant for years now, and I can honestly say that they never disappoint. The food is always fresh and flavorful, and the staff goes above and beyond to make sure that every customer leaves satisfied.\"",
            photo: "https://media.istockphoto.com/id/667252200/pl/zdj%C4%99cie/dojrza%C5%82y-biznesmen-u%C5%9Bmiechni%C4%99ty-i-odwracanie-si%C4%99-odizolowane-na-bia%C5%82ym.jpg?s=2048x2048&w=is&k=20&c=NBi__xijw5Psn6NKS3JMT3-na6ua7dYat32x4ngyaTU="
        },
        {
            rating: 5,
            name: "Maya",
            review: "\"I recently had a business dinner at Lemon restaurant and was incredibly impressed with the overall experience. The ambiance was perfect for a professional setting, and the staff was attentive without being intrusive.\"",
            photo: "https://media.istockphoto.com/id/1326417862/pl/zdj%C4%99cie/m%C5%82oda-kobieta-%C5%9Bmieje-si%C4%99-podczas-relaksu-w-domu.jpg?s=2048x2048&w=is&k=20&c=ErP4RXSj5vXFwOtvGXENurKOKXApjnj6QjFOOyvOTqE="
        },
        {
            rating: 5,
            name: "Jackson",
            review: "\"I stumbled upon Lemon restaurant while exploring the city and I am so glad I did! The menu was full of unique and creative dishes that I couldn't wait to try. Every bite was bursting with flavor and the presentation was beautiful.\"",
            photo: "https://media.istockphoto.com/id/1203732886/photo/portrait-of-smiling-mid-adult-caucasian-businessman.jpg?s=2048x2048&w=is&k=20&c=cQcH8rQOyLE3PDb-oAITdfHmNpgacONdiK2C-iGAjlc="
        }
    ]
    const Testimonial = ({rating, photo, name, review}) => {
        return (
            <>
                <div className="rating mb-2">
                    {[...Array(rating)].map((e, i) => <i key={i} className="bi bi-star-fill"></i>)}
                </div>
                <div className="photo mb-2"><img style={{height: "100px"}} className='object-fit-contain border rounded' src={photo} alt="" /></div>
                <h4>{name}</h4>
                <div className="review"><em>{review}</em></div>
            </>
        )
    }

    return (
        <>
            <h2 className='h1 text-center mb-4'>Testimonials</h2>
            <div className="row">
                {testimonials.map((t,i) => {
                    return (
                        <div key={i} className="col-12 col-md-3 mb-4 mb-md-0">
                            <Testimonial rating={t.rating} photo={t.photo} name={t.name} review={t.review} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Testimonials;
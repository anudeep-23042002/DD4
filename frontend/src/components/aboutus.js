import React from 'react'
import {  Card, CardContent,Typography,Box } from '@mui/material';

const Aboutus=()=>{
    const foodWasteData = {
        foodWastePercentage: 33,
        foodWasteAmount: "1.3 billion tonnes",
        foodWasteValue: "$1 trillion",
    };

    const foodInsecurityData = {
        hungryPeople: "690 million",
        year: 2019,
    };
    const teamMembers = [
        { name: "John Doe", role: "CEO", bio: "John is the founder of our platform. His passion for reducing food waste drives the mission of our platform." },
        { name: "Jane Smith", role: "CTO", bio: "Jane is the technical genius behind our platform. She ensures that the platform runs smoothly to serve our users effectively." }
    ];
    return (
        <div>
           <Box style={{marginTop: '70px'}}>
                <Card>
                    <CardContent>
                    <Typography variant="h4" component="h2" align="center" gutterBottom>
                    AboutUs
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Welcome to Dishdistribute, an innovative online platform dedicated to tackling two 
                    pressing problems of our times – food waste and food insecurity. By seamlessly 
                    connecting food donors such as restaurants, grocery stores, and individuals with 
                    local organizations or individuals in need, we help rescue surplus food that would 
                    otherwise go to waste and ensure it reaches those who need it most. 
                    Join us in our mission to create a waste-free, hunger-free world, 
                    one meal at a time
                    Food waste and food insecurity are significant global issues. Every year, 
                    approximately <strong>{foodWasteData.foodWastePercentage}%</strong> of all food 
                    produced for human consumption globally goes to waste. That's around <strong>
                        {foodWasteData.foodWasteAmount}</strong> of food, worth nearly 
                        <strong>{foodWasteData.foodWasteValue}</strong>.
                    At the same time, according to the United Nations, nearly <strong>
                        {foodInsecurityData.hungryPeople}</strong> people worldwide went hungry in 
                        {foodInsecurityData.year}. And the situation has been exacerbated by the 
                        COVID-19 pandemic, which has affected food supply chains and increased food 
                        insecurity among the most vulnerable populations.
                    </Typography>
                    <br></br>
                    <Typography variant="body1" gutterBottom>
                    Our platform aims to address this paradox of waste and want. 
                    By connecting food donors with those in need, we not only reduce food waste but also
                     work towards alleviating food insecurity in our communities.
                    Our solution lies in the power of connection. At 
                    DishDistribute, we have created a digital platform designed to bridge the
                     gap between abundance and need. We facilitate the process of donating, receiving, and 
                     volunteering to make the redistribution of surplus food as seamless as possible.
                    </Typography>
                    <br></br>
                    <Typography variant="body1" gutterBottom>
                    For Donors: Whether you're a restaurant with leftover meals at the end of the day, 
                    a grocery store with goods nearing their sell-by date, or an individual with an 
                    overstocked pantry, our platform makes it simple to list your available items for 
                    donation. By donating through DishDistribute, you can reduce food waste,
                     decrease your disposal costs, and make a positive impact on your community.
                    </Typography>
                    <br></br>
                    <Typography variant="body1" gutterBottom>
                    For Recipients: Food banks, shelters, and other community organizations can easily 
                    browse available donations in their area and arrange for pickup or delivery. 
                    Individuals facing food insecurity can also access this network to find available
                     resources in their area. Through DishDistribute, recipients can secure a 
                     diverse range of food items, supplementing their efforts to feed those who need 
                     it most.
                    </Typography>
                    <br></br>
                    <Typography variant="body1" gutterBottom>
                    For Volunteers: We offer a structured, rewarding volunteer experience for those 
                    looking to make a difference. Volunteers can assist in a variety of roles, 
                    from collecting and transporting food donations, to helping organize and distribute 
                    food at recipient organizations. Volunteering with DishDistribute provides a 
                    hands-on way to combat food waste and food insecurity in your community.
                    By leveraging technology, DishDistribute turns the problem of food waste 
                    into a solution for food insecurity. Together, we can build a more sustainable and 
                    compassionate world."
                    </Typography>
                    <br></br>
                    </CardContent>
                </Card>
            </Box >
            <Box my={4}>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                Our story
                </Typography>
                <Card mb={2}>
                    <CardContent>
                        <Typography variant="body1" gutterBottom>
                        "Born from a recognition of the paradox of food waste amidst food insecurity, 
                        DishDistribute was established to turn this problem into a solution.
                         Our founder, Anudeep Sirise witnessed firsthand the
                          issue of surplus food being discarded while many people in their local 
                          community faced food scarcity. He decided to create a digital platform to 
                          bridge this gap and connect those with excess to those in need. Inspired by 
                          the philosophy that everyone deserves access to nutritious food, 
                          DishDistribute has grown into a robust community of donors, recipients, 
                          and volunteers all working towards a world with less waste and more sharing."
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                Impact
                </Typography>
                <Card mb={2}>
                    <CardContent>
                        <Typography variant="body1" gutterBottom>
                            "Since our inception, DishDistribute has made significant strides 
                            towards reducing food waste and alleviating food insecurity. To date, 
                            we have facilitated the redistribution of over 2 tonnes of food,
                             preventing this valuable resource from going to waste and instead 
                             nourishing our communities. We have partnered with over 50 local businesses and organizations, giving them an outlet to donate their surplus food and contribute positively to their communities. Our platform has also connected 100 volunteers with meaningful opportunities to make a difference in the fight against food waste and insecurity.
                            But most importantly, we have helped feed 50 individuals facing food insecurity, offering them access to a wide range of nutritious food items that would have otherwise been wasted.
                            Our impact grows with each new connection made on our platform. Join us 
                            today and be part of the solution."
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box>
               <Card mb={2}>
                    <CardContent>
                <Typography variant="h4" component="h2" align="center" gutterBottom>
                    Our Team
                </Typography>
                {teamMembers.map(member => (
                    <Box my={2} key={member.name}>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="subtitle1">{member.role}</Typography>
                        <Typography variant="body1">{member.bio}</Typography>
                    </Box>
                ))}
                </CardContent>
                </Card>
                </Box >
                <Box my={4}>
                <Card mb={2}>
                    <CardContent>
                    <Typography variant="h4" component="h2" align='center' gutterBottom>
                        Vision for the Future
                    </Typography>
                    <Typography variant="body1">
                        We are continuously looking for ways to improve and expand our services. We aim to reach more communities and broaden our impact in the near future. Stay tuned for new features and updates!
                    </Typography>
                </CardContent>
                </Card>
                </Box >
                <Box my={4}>
                <Card>
                <CardContent>
                <Typography variant="h4" component="h2"     align='center' gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1">
                    If you have any questions, concerns, or suggestions, we'd love to hear from you. You can reach us at anudeep23042002@gmail.com.
                </Typography>
                </CardContent>
                </Card>
            </Box>
        </div>
    )
}
export default Aboutus;

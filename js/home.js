

let reviewsData = [
    {
        name: "Amit Patel",
        age: 28,
        degree: "Engineering",
        profilePic: "amitpatel28engineering",
        reviewText: "I had an amazing experience with this career counseling company. Their personalized approach helped me identify my strengths and career goals effectively. I highly recommend their services!"
    },
    {
        name: "Priya Singh",
        age: 25,
        degree: "MBA",
        profilePic: "priyasingh25mba",
        reviewText: "I'm extremely grateful to the team for their guidance. They provided valuable insights into various career options and helped me make informed decisions. Thanks to them, I'm now pursuing my dream career!"
    },
    {
        name: "Rajesh Kumar",
        age: 32,
        degree: "Finance",
        profilePic: "rajeshkumar32finance",
        reviewText: "The career counseling sessions were extremely beneficial for me. They helped me understand my career aspirations and provided practical advice to achieve them. I'm now more confident about my career path."
    },
    {
        name: "Sneha Sharma",
        age: 27,
        degree: "Computer Science",
        profilePic: "snehasharma27computerscience",
        reviewText: "I was impressed by the professionalism and expertise of the counselors. They guided me through every step of the career planning process and helped me explore new opportunities. Highly recommended!"
    },
    {
        name: "Vikram Singh",
        age: 29,
        degree: "Marketing",
        profilePic: "vikramsingh29marketing",
        reviewText: "The career counseling services offered here are top-notch. The counselors are knowledgeable and supportive, and their guidance was instrumental in shaping my career path. I'm grateful for their assistance."
    }
];

// Get elements
const reviewText = document.querySelector('.reviewText');
const reviewerInfo = document.querySelector('.reviewerInfo');
const profilePic = document.querySelector('.reviewerPicture-wrapper img');
const previousButton = document.querySelector('.previousReviewButton');
const nextButton = document.querySelector('.nextReviewButton');

// Initialize index
let currentIndex = 0;

// Function to update review
function updateReview(index) {
    const review = reviewsData[index];
    reviewText.textContent = review.reviewText;
    reviewerInfo.textContent = `${review.name}, ${review.age}, ${review.degree}`;
    profilePic.src = `assets/reviewersPics/${review.profilePic}.webp`;
    profilePic.alt = `${review.name} profile picture`;
}

// Initial update
updateReview(currentIndex);

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewsData.length;
    updateReview(currentIndex);
});

// Event listener for previous button
previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
    updateReview(currentIndex);
});





// Open Webinar Poster Dialog

const webinarPosterDialog = document.querySelector('.webinarPoster-dialog')

webinarPosterDialog.showModal()

const closeDialogButton = document.querySelector('.closeDialogButton')
closeDialogButton.blur()

closeDialogButton.addEventListener('click', ()=>{
    webinarPosterDialog.close()
    webinarPosterDialog.style.display = 'none'
})

const webinarPosterImage = document.querySelector('.webinarPosterImage')
webinarPosterImage.addEventListener('click', ()=>{
    // open('p/webinar.html', "_self")
})

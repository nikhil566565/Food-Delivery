"use client"

import { useEffect, useRef, useState } from "react"
import "./reviews.css"

const Reviews = () => {
    const trackRef = useRef(null)
    const [slideIndex, setSlideIndex] = useState(0)
    const [slidesToShow, setSlidesToShow] = useState(3)
    const [slideWidth, setSlideWidth] = useState(0)
    const autoSlideIntervalRef = useRef(null)

    const reviewsData = [
        {
            id: 1,
            name: "Biski",
            location: "Rajsthan",
            rating: 5,
            date: "24th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            highlighted: false,
        },
        {
            id: 2,
            name: "Vishakha",
            location: "Rajsthan",
            rating: 5,
            date: "24th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            highlighted: true,
        },
        {
            id: 3,
            name: "Manish",
            location: "Rajsthan",
            rating: 5,
            date: "24th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            highlighted: false,
        },
        {
            id: 4,
            name: "Geeta",
            location: "Rajsthan",
            rating: 4,
            date: "18th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/women/22.jpg",
            highlighted: false,
        },
        {
            id: 5,
            name: "Devanshu",
            location: "Rajsthan",
            rating: 3,
            date: "15th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/men/42.jpg",
            highlighted: false,
        },
        {
            id: 6,
            name: "Saneha",
            location: "Rajsthan",
            rating: 5,
            date: "10th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/women/56.jpg",
            highlighted: false,
        },
        {
            id: 7,
            name: "Rohit",
            location: "Rajsthan",
            rating: 3.5,
            date: "5th September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/men/78.jpg",
            highlighted: false,
        },
        {
            id: 8,
            name: "Diksha",
            location: "Rajsthan",
            rating: 4,
            date: "1st September, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vero tempora dolorum quidem ipsa harum soluta neque voluptatum explicabo cupiditate iure velit dolor inventore eum delectus ut",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            highlighted: false,
        },
    ]

    const updateSlideWidth = () => {
        if (trackRef.current) {
            const slides = trackRef.current.querySelectorAll(".Reviews-page-carousel-slide")
            if (slides.length > 0) {
                setSlideWidth(slides[0].getBoundingClientRect().width)
            }
        }
    }

    const updateCarousel = () => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${slideIndex * slideWidth}px)`
            updateActiveSlide()
        }
    }

    const updateActiveSlide = () => {
        if (trackRef.current) {
            const slides = trackRef.current.querySelectorAll(".Reviews-page-carousel-slide")


            slides.forEach((slide) => {
                slide.querySelector(".Reviews-page-review-card").classList.remove("Reviews-page-highlighted")
            })


            if (slidesToShow === 3 && slideIndex + 1 < slides.length) {
                slides[slideIndex + 1].querySelector(".Reviews-page-review-card").classList.add("Reviews-page-highlighted")
            }
        }
    }

    const goToPrevSlide = () => {
        if (trackRef.current) {
            const slides = trackRef.current.querySelectorAll(".Reviews-page-carousel-slide")
            if (slideIndex <= 0) {
                setSlideIndex(slides.length - slidesToShow)
            } else {
                setSlideIndex(slideIndex - 1)
            }
        }
    }

    const goToNextSlide = () => {
        if (trackRef.current) {
            const slides = trackRef.current.querySelectorAll(".Reviews-page-carousel-slide")
            if (slideIndex >= slides.length - slidesToShow) {
                setSlideIndex(0)
            } else {
                setSlideIndex(slideIndex + 1)
            }
        }
    }

    const handleResize = () => {
        const newSlidesToShow = window.innerWidth >= 768 ? 3 : 1
        setSlidesToShow(newSlidesToShow)

        if (trackRef.current) {
            const slides = trackRef.current.querySelectorAll(".Reviews-page-carousel-slide")
            if (slideIndex > slides.length - newSlidesToShow) {
                setSlideIndex(Math.max(0, slides.length - newSlidesToShow))
            }
        }

        updateSlideWidth()
    }

    const startAutoSlide = () => {
        stopAutoSlide()
        autoSlideIntervalRef.current = setInterval(goToNextSlide, 3000)
    }

    const stopAutoSlide = () => {
        if (autoSlideIntervalRef.current) {
            clearInterval(autoSlideIntervalRef.current)
        }
    }

    // Render stars based on rating
    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<i key={i} className="fas fa-star"></i>)
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>)
            } else {
                stars.push(<i key={i} className="far fa-star"></i>)
            }
        }

        return stars
    }

    useEffect(() => {
        handleResize()
        startAutoSlide()

        window.addEventListener("resize", handleResize)

        return () => {
            stopAutoSlide()
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        updateCarousel()
    }, [slideIndex, slideWidth])

    return (
        <div className="Reviews-page-container">
            <div className="Reviews-page-wrapper">
                {/* Header */}
                <div className="Reviews-page-header">
                    <h1 className="Reviews-page-title">Customer Reviews</h1>
                    <div className="Reviews-page-nav-buttons">
                        <button
                            id="prevBtn"
                            className="Reviews-page-nav-button"
                            onClick={() => {
                                goToPrevSlide()
                                stopAutoSlide()
                                startAutoSlide()
                            }}
                            onMouseEnter={stopAutoSlide}
                            onMouseLeave={startAutoSlide}
                        >
                            <i className="fas fa-chevron-left fa-lg"></i>
                        </button>
                        <button
                            id="nextBtn"
                            className="Reviews-page-nav-button"
                            onClick={() => {
                                goToNextSlide()
                                stopAutoSlide()
                                startAutoSlide()
                            }}
                            onMouseEnter={stopAutoSlide}
                            onMouseLeave={startAutoSlide}
                        >
                            <i className="fas fa-chevron-right fa-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Reviews */}
                <div className="Reviews-page-carousel-container" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
                    <div className="Reviews-page-carousel-track" id="carouselTrack" ref={trackRef}>
                        {reviewsData.map((review) => (
                            <div key={review.id} className="Reviews-page-carousel-slide">
                                <div className={`Reviews-page-review-card ${review.highlighted ? "Reviews-page-highlighted" : ""}`}>
                                    <div className="Reviews-page-review-header">
                                        <div className="Reviews-page-reviewer">
                                            <img
                                                src={review.image || "/placeholder.svg"}
                                                alt={`${review.name} profile`}
                                                className="Reviews-page-reviewer-img"
                                            />
                                            <div className="Reviews-page-reviewer-info">
                                                <h3>{review.name}</h3>
                                                <p className="Reviews-page-reviewer-location">{review.location}</p>
                                            </div>
                                        </div>
                                        <div className="Reviews-page-review-meta">
                                            <div className="Reviews-page-stars">{renderStars(review.rating)}</div>
                                            <div className="Reviews-page-review-date">
                                                <i className="far fa-clock"></i>
                                                <span>{review.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="Reviews-page-review-text">{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews


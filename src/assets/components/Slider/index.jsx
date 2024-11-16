import { Component } from 'react';
import './style.css';

export default class Slider extends Component {
    state = {
        currentSlide: 0,
    }

    nextSlide = () => {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        const newSlide = (currentSlide + 4) % (slides.length); // Move by 4 slides
        this.setState({ currentSlide: newSlide });
    }

    prevSlide = () => {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        const newSlide = (currentSlide - 4 + slides.length) % (slides.length); // Move back by 4 slides
        this.setState({ currentSlide: newSlide });
    }

    render() {
        const { currentSlide } = this.state;
        const { slides } = this.props;
        
        // Get the four slides to display
        const visibleSlides = slides.slice(currentSlide, currentSlide + 4);

        return (
            <div className='slider'>
                <button onClick={this.prevSlide}>Previous</button>
                <div className='slides'>
                    {visibleSlides.map((e) => (
                        <div key={e.alt}>
                            <img src={e.image} alt={e.alt} />
                        </div>
                    ))}
                </div>
                <button onClick={this.nextSlide}>Next</button>
            </div>
        );
    }
}
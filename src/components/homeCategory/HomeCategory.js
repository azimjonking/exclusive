import HomeLinks from "../homeLinks/HomeLinks";
import HomeSlider from "../homeSlider/HomeSlider";
import "./homeCategory.css";

function HomeCategory() {
    return (
        <div className="home-category">
            <HomeLinks/>
            <HomeSlider/>
        </div>
    )
}

export default HomeCategory

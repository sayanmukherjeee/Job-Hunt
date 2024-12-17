import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto my-10 relative">
        {/* Carousel Content */}
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Arrows with adjusted spacing */}
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black shadow md:left-[-1.5rem] lg:left-[-2rem]" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black shadow md:right-[-1.5rem] lg:right-[-2rem]" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;

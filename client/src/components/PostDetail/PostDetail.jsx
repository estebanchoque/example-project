import * as React from "react";
import { Carousel } from "react-carousel-minimal";

const data = [
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SAWxDz-VWBkHB80AM6lmEQHzCO3Tps70ilZgDgVUgbFGm-OGHIY6ee02qSZD1ECk5fI&usqp=CAU",
];

const PostDetail = () => {
  const images = data.map((elem) => ({ image: elem }));
  console.log(images);

  return (
    <div>
      <div style={{ textAlign: "center", padding: "0 20px" }}>
        <Carousel
          data={images}
          automatic={true}
          time={5000}
          radius="3px"
          dots={true}
          thumbnails={true}
          thumbnailWidth="100px"
          slideImageFit="cover"
          slideBackgroundColor="darkgrey"
          style={{
            textAlign: "center",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  );
};

export default PostDetail;

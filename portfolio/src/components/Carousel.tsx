import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}프로젝트 이름</h2>
      <img src={props.item.url} width={"100px"} className="object-cover" />
      <p>{props.item.description}내용요약</p>
      <button>자세히 보러가기</button>
    </Paper>
  );
}

export default function CaroseulPage(): JSX.Element {
  const items = [
    {
      name: "Random Name #1",
      url: "/back.png",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      url: "/back.png",
      description: "Hello World!",
    },
  ];
  return (
    <Carousel
      NextIcon={
        <ArrowForwardIos className="bg-gray w-[35px] h-[35px] p-1 rounded-3xl" />
      }
      PrevIcon={
        <ArrowBackIosNew className="bg-gray w-[35px] h-[35px] p-1 rounded-3xl" />
      }
      indicators={false}
      duration={3000}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

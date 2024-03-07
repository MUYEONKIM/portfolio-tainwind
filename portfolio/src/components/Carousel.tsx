import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function Item(props: any) {
  console.log(props.item.url);
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <img src={props.item.url} width={"100px"} className="object-cover" />
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
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

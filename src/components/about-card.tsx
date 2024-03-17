import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card shadow={false}>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
        <Typography variant="h6" className="mb-4 text-center" color="black">
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="black">
          {title}
        </Typography>
        <Typography
          color="gray"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
        >
          {description}
        </Typography>
        <Button color="gray" size="sm">
          View details
        </Button>
      </CardBody>
    </Card>
  );
}


export default AboutCard;

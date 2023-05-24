import ghpages from "gh-pages";

const meetup = argv.meetup;

await new Promise((res) =>
  ghpages.publish(path.join(meetup), { branch: meetup }, res)
);

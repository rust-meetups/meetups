import ghpages from "gh-pages";

const meetup = argv.meetup;

ghpages.publish(path.join(meetup), { branch: meetup });

import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => (
  // Forced Error code to test if component did catch on the app
  // if (true) {
  //   throw new Error('Nooooo');
  // }
  <>
    {
      robots.map((user, i) => (
        <Card
          key={robots[i].id}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
          username={robots[i].username}
        />
        )
      )
    }
  </>
  );

export default CardList;

import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => (
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

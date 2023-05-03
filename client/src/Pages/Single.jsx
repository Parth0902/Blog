import React from "react";
import { Link } from "react-router-dom";
import Writer from "../Images/Parth.jpg";

import Menue from "../components/Menue";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img src={Writer} alt="" />

          <div className="info">
            <span>Parth</span>
            <p>Posted 2 days ago</p>

            <div className="edit">
              <Link to={`/write?edit=2`}>
                <i class="bx bx-edit"></i>
              </Link>
              <i class="bx bx-trash"></i>
            </div>
          </div>
        </div>
        
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, ducimus.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut facere ea delectus possimus aliquid velit enim reprehenderit tempora, asperiores ut perferendis, culpa sunt officiis! Quisquam vel ipsa modi quasi sequi? Tenetur omnis illum impedit incidunt unde praesentium eos saepe quas reiciendis ex, aspernatur harum doloremque vel corporis sint odio commodi obcaecati veritatis eum! Blanditiis iste quod aperiam deserunt, officia temporibus. Nulla temporibus iusto ipsam quia molestiae, ad vero nesciunt tempora dolores consequatur nostrum libero perferendis 
        <br/>
        <br/>
        laudantium aspernatur aut totam eveniet nemo vel necessitatibus sed. Repellat dolores fugit iure maxime saepe ad assumenda animi ea odit hic deserunt doloremque nisi perferendis debitis excepturi, deleniti, facere doloribus qui aspernatur eveniet modi. Unde nulla minima, accusantium mollitia, doloremque voluptatibus accusamus omnis doloribus quidem velit ea quisquam ut, dolorum explicabo deserunt at laborum! Nesciunt, corrupti! Fugiat deserunt omnis quod laboriosam nulla quos 
       <br/>
       <br/>
        dolores, voluptas consectetur labore architecto nihil libero corrupti eius, impedit ratione culpa sed nam optio! Quam dicta error laudantium, dolorem fugiat aut? Ullam aliquid cupiditate a perspiciatis excepturi quisquam harum magnam quaerat doloribus amet, quos tempora sint nemo? Recusandae quaerat, amet inventore harum optio est voluptas earum quasi quo ut consequatur corporis asperiores fuga similique non quia cum vitae alias. Fuga. Lorem ipsum dolor sit amet consectetur.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat, voluptates expedita deleniti officia esse sapiente nihil doloribus dolorem quibusdam voluptate rem possimus iusto iste inventore perferendis corrupti, necessitatibus quos!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsum in quasi natus officia sequi modi ut dolores esse impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur provident quos veniam minus soluta iusto, porro vero consequuntur nisi!
        </p>
        
      </div>
      <div className="menu">
        <Menue/>
      </div>
    </div>
  );
};

export default Single;

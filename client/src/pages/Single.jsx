import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/12766490/pexels-photo-12766490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Mehedi</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni in
          incidunt, fugiat cumque aliquid!
        </h1>
        <p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            ipsam explicabo accusantium, quae atque commodi sed voluptatibus
            praesentium omnis aperiam saepe labore ex. Sapiente quos libero
            alias,
            <br />
            <br />
            totam suscipit obcaecati eligendi voluptatibus consectetur adipisci
            eaque cum sed distinctio beatae minima molestiae accusamus facere
            quis. Harum quo quod doloribus iusto consequatur quidem distinctio
            sed optio nostrum!
            <br />
            <br />
            Quaerat harum consequatur odit. Praesentium facilis est maxime saepe
            amet eum officiis harum explicabo illum ipsum esse odio optio modi
            eveniet consequatur pariatur, nostrum deleniti sed, aliquam
            reiciendis ex perspiciatis? Temporibus aliquid illo fugiat dicta?
            Nisi facilis sequi expedita voluptates repudiandae nostrum corrupti
            eos consequuntur ipsum! Cumque officia aperiam at officiis cum minus
            beatae dolor voluptates ipsa facere nisi perferendis consequuntur
            voluptatibus vitae perspiciatis,
            <br />
            <br />
            rem quasi adipisci, cupiditate voluptatem incidunt consectetur
            voluptas nesciunt et similique. Rerum cumque nesciunt veniam odio
            ut, quae iure possimus neque dolor, quos minima! Ipsa perferendis,
            quaerat, natus consequatur eligendi molestiae quisquam ipsum velit
            quibusdam id harum sed tempore delectus. Harum reprehenderit
            laboriosam laudantium. Aliquam amet repellendus eveniet nisi
            blanditiis numquam distinctio cum accusamus praesentium tempore
            voluptates eum nulla cumque necessitatibus, id assumenda, sed magni
            consectetur corrupti ipsam, hic aperiam mollitia perspiciatis iure!
            Adipisci, nostrum facilis ullam placeat consequatur at nemo commodi
            quibusdam cumque distinctio maiores blanditiis suscipit vitae ipsa?
            Neque porro qui repudiandae repellat voluptatem tempora facilis
            necessitatibus voluptatibus nobis, eaque, nisi vel in sint, ad aut
            consectetur. Nihil doloremque natus nulla excepturi quasi quos.
            Iusto delectus modi perferendis, minima odio corrupti, nobis aliquid
            quam sit, facere tenetur! Velit dolores eligendi,
            <br />
            <br />
            consequuntur, illo ipsa aliquid voluptatum facere id tenetur
            excepturi est reprehenderit quidem temporibus praesentium ipsam
            recusandae qui ratione rem impedit, dicta eius distinctio deserunt
            nulla autem. Rerum corporis iusto incidunt eveniet commodi omnis
            deleniti sint beatae hic, porro rem dolor voluptas totam
            perspiciatis excepturi fugiat iure ipsa.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

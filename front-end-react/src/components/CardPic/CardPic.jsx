import React from 'react';
import { Card , Rate } from 'antd';

const { Meta } = Card;

const CardPic = () => {

    return (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://images.pexels.com/photos/3662360/pexels-photo-3662360.jpeg" />}
  >
    <Meta title="Sayanora Pet Hotel" description="Bilmemne cad. bilmem sk. sanane.s konutları" />

    <Rate disabled defaultValue={2} />


    <Meta description="2 gecelik fiyat " />
    <span style={{fontWeight: 'bold' , fontSize: 20}}>23131 TL</span>

  </Card>
)
};

export default CardPic;
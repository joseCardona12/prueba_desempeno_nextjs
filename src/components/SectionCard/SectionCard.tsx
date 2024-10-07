"use client";
import { IProduct } from "@/interfaces/productInterface";
import styled from "styled-components";
import { FaCirclePlus } from "react-icons/fa6";

const SectionCardStyled = styled.section
`
display:flex;
justify-content:center;
padding: var(--padding-medium);
flex-wrap:wrap;
padding:var(--padding-large);
gap:var(--padding-medium);

`;

const CardStyled = styled.div
`
flex-basis:20%;
height: 500px;
display:flex;
flex-direction:column;
gap:var(--padding-medium);
border:1px solid var(--color-gray);
border-radius:var(--border-radius-small);   
`;

const WrapperImagesStyled = styled.div
`
width:100%;
height:50%;
`;


const ImageStyled = styled.img
`
width:100%;
height:100%;
object-fit:cover;
border-radius:var(--border-radius-small);
`;

const WrapperBodyStyled = styled.div
`
padding: var(--padding-small);
`;

const WrapperfooterStyled = styled.div
`
padding: var(--padding-small);
`;



interface CardProps{
    data: IProduct[]
}

export default function SectionCard({data}: CardProps):React.ReactElement{
    return(
        <SectionCardStyled className="content-cards">
            {data.map(({id,title,price,description,category,image,rating}:IProduct,index)=>(
                <CardStyled className="card" key={index}>
                    <WrapperImagesStyled className="card-header">
                        <ImageStyled src={image} alt={`${title}${image}`} />
                    </WrapperImagesStyled>
                    <WrapperBodyStyled>
                        <h4>{title}</h4>
                        <h5>{price}</h5>
                        <div>
                            <p><strong>Count:</strong>{rating.count}</p>
                            <p><strong>Rate:</strong>{rating.rate}</p>
                        </div>
                    </WrapperBodyStyled>
                   < WrapperfooterStyled>
                    <div>
                        <FaCirclePlus />
                    </div>
                   </WrapperfooterStyled>
                </CardStyled>
            ))}
        </SectionCardStyled>
    )
}
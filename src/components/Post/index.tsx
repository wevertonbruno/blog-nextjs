import Link from "next/link";
import { ReactElement } from "react";
import { FaInstagram, FaFacebookSquare, FaWhatsapp, FaShareAlt } from 'react-icons/fa'
import { Container, OverLine, Title, BodyText } from './styles';


type PostProps = {
    title: String;
    slug: String;
    body: String;
    data: String;
}

export const Post = ({title, data, body, slug}: PostProps): ReactElement => {
    return (
        <Container>
            <OverLine position="top">
                {data}
            </OverLine>
            <Title>
                <Link href={`/posts/${slug}`}>
                    {title}
                </Link>
            </Title>
            <BodyText>
                {body}
            </BodyText>
            <OverLine position="bottom">
                <ul>
                    <li><FaShareAlt /></li>
                    <li><FaInstagram /></li>
                    <li><FaFacebookSquare /></li>
                    <li><FaWhatsapp /></li>
                </ul>
            </OverLine>
        </Container>
    );
}
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'

const PostPage = () => {
  const router = useRouter()
  const { slug } = router.query

    return (
        <Layout>
            <h1>{slug}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex libero fugit pariatur veritatis alias itaque quis doloribus cumque recusandae. Saepe deleniti dolor est explicabo quas maxime totam illum? Blanditiis!
            Vero enim asperiores possimus ipsam provident ratione aspernatur animi mollitia! Ullam excepturi magni laborum iusto eum, illum ipsam, dignissimos nesciunt iure earum asperiores blanditiis ea? Doloremque velit possimus atque ullam.
            Error, sequi. Odit voluptatibus minima sunt, similique vel harum dolor hic accusamus, illum quis molestiae. Aperiam soluta ratione odio enim consequuntur quidem culpa dignissimos nemo quae corrupti veritatis, hic vero!
            Nemo ut a consequatur, sint nulla dolorum sunt, iste amet, impedit labore tenetur laboriosam mollitia magnam fugiat maiores. Inventore exercitationem at ea sapiente ut consectetur aliquid voluptates quia distinctio harum!
            Libero ipsa pariatur deleniti rerum architecto praesentium accusantium repellat ullam quas dignissimos inventore officia nemo provident fugiat, optio exercitationem nobis! Facere velit, praesentium assumenda expedita eos quam optio nisi odio.
            Illo, ea suscipit neque fugiat doloribus impedit esse at voluptatem facilis eius in similique quis quae incidunt dolores saepe aperiam cupiditate rerum reprehenderit possimus tenetur nulla commodi nostrum? Ipsum, suscipit.
            Laudantium, molestiae tempora dolorum quia voluptatibus aperiam a doloribus iure autem cum, aliquid necessitatibus id animi impedit. Esse, magni pariatur voluptates maiores asperiores modi sit consectetur, id molestias rerum ipsum?
            Hic minus magnam adipisci sed aspernatur facere. Non rerum accusamus eius, aspernatur voluptatum dolor quia reiciendis quibusdam, aliquam, consequatur sed nemo voluptatibus corrupti iure quisquam ab eaque nam pariatur atque.
            Autem, reiciendis vitae. Veritatis dicta dolor, voluptatibus beatae ea, voluptatem optio, minus odit quisquam quis reprehenderit quam adipisci tenetur ut voluptate non. Fugit saepe sed sequi ab consectetur, ad porro?
            Officia ipsa minima optio, facilis in quaerat tenetur numquam adipisci porro ea soluta. Iste adipisci ad praesentium id velit alias, ex accusamus, rerum voluptatem maxime sit ratione deserunt quidem laborum.
        </Layout>
    )
}

export default PostPage
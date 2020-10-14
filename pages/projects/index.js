import Content from 'components/content/content'
import PageContent from 'components/pageContent/pageContent'
import Link from 'next/link'
import ProjectThumbnail from 'components/projectThumbnail/projectThumbnail'

const projects = [
	{
  	name: 'Tic Tac Toe',
    url: '/projects/tic-tac-toe',
    thumbnail: 'tic-tac-toe.jpg'
  },
  {
  	name: 'Shrinking Space',
    url: '/projects/shrinking-space',
    thumbnail: 'shrinking-space.jpg'
  },
 	{
  	name: 'Traveler',
    url: '/projects/traveler',
    thumbnail: 'traveler.jpg'
  }
]

projects.forEach((project) => {
	console.log(project);
});

export default function Projects() {
  return (
    <Content>
      <PageContent title='Projects'>
        <Link href="/projects/tic-tac-toe">
          <a><ProjectThumbnail imgUrl="/tic-tac-toe.jpg" /></a>
        </Link>
      </PageContent>
    </Content>
  )  
}

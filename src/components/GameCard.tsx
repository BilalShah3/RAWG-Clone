import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import  Game  from "../entities/Game"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface GameCardProps {
    game: Game
}
const GameCard = ({game}:GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p=>p.platform) } />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Link to={`/games/${game.slug}`}>
         <Heading fontSize='2xl'>{game.name}</Heading><Emoji rating={game.rating_top}/>
        </Link>
      </CardBody>
    </Card>
  )
}

export default GameCard
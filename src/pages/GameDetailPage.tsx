import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Center, Heading, Spinner } from "@chakra-ui/react"
import ExpandableText from "../components/ExpandableText"
import GameAttributes from "../components/GameAttributes"

const GameDetailPage = () => {
  const { slug } = useParams()
  const{data:game, isLoading, error} = useGame(slug!)

  if(isLoading) 
      return (
         <Center height="100vh">
            <Spinner size="xl" />
          </Center>
      )
  if(error || !game) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  )
}

export default GameDetailPage
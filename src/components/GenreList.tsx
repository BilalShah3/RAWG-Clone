import { HStack, Image, List, ListItem, Spinner, Button} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre, selectedGenre}:GenreListProps) => {
  const {data:genres, isLoading, error} = useGenres()
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List>
      {genres.map(genre => 
        <ListItem key={genre.id} paddingY="5px">
           <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)} borderRadius={8} alt={genre.name} boxSize="32px" />
              <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
           </HStack>
        </ListItem>
      )}
   </List>
         
  )
}

export default GenreList
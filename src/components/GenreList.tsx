import { HStack, Image, List, ListItem, Spinner, Button, Heading} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {
  const {data:genres, isLoading, error} = useGenres()
 const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <>
       <Heading fontSize='2xl' marginTop={9} marginBottom={3}>Genres</Heading>
        <List>
          {genres?.results.map(genre => 
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                  <Image src={getCroppedImageUrl(genre.image_background)} objectFit='cover' borderRadius={8} alt={genre.name} boxSize="32px" />
                  <Button onClick={() => setSelectedGenreId(genre.id)} whiteSpace="normal" textAlign='left' fontSize='md' variant='link'
                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                  >
                    {genre.name}
                  </Button>
              </HStack>
            </ListItem>
          )}
      </List>
    </>
         
  )
}

export default GenreList
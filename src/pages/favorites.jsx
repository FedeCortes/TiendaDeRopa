import React from "react";

const favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp.data);

    if (resp.data.length > 0) {
      setFavorites(resp.data);
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          height: "100vh",
        }}
        style={{
          backgroundColor: "#282c34",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginLeft: "-8px",
          marginRight: "-8px",
          marginBottom: "-8px",
          overflow: "hidden",
        }}
      >
        {favorites.length > 0 &&
          favorites.map((p, index) => {
            return (
              <Link
                to={`/Details/${p.id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Item p={p} sx={{ margin: "8px" }} />
              </Link>
            );
          })}

        {favorites.length == 0 && <h1>No favorite items found</h1>}
      </Box>
    </>
  );
};

export default favorites;

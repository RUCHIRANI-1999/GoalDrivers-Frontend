import React, {Products} from 'react'
import Product from './Product'
import './Home.css'
import heading from './Pictures/heading.jpg';

function Home() {
  return (
    <div className="home">
      <img className="home_picture" src={heading} alt="Home picture" />

            <div className='home_pinfo'>
                <Product
                    id="1234"
                    title="Printer"
                    price={15000.00}
                    rating={4}
                    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPEBAQEA4PEA4QDxUPEA8PDw8PFREXFhURFRUYHSggGBolHRUVITEhJSsrLi4uFx8zRDMtNygtLisBCgoKDgwNFw0QGi0lGCUrNzQ4Ny0tMys4NTIyKy0tMjEtKy0tListKzc4Mis3KzUtNy0rLTIrLCsrKysrKzcrN//AABEIANMA7wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xABKEAACAQICBAkHCAgEBwEAAAAAAQIDEQQSBSExUQcVQVJTcZGT0RMUIoGSodIGF0JUYaOxwSMyM2JylKLCFoKksmNkdIOzw+FE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAaEQEBAQADAQAAAAAAAAAAAAAAARESMVEC/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsVcZSi7SqU4v96cU/eyHGOH6al3kPEDKBi8Y4fpqXeQ8Rxlh+mo95DxAygYvGWH6ej3kPEcZYfp6PeQ8QMoGLxlh+no95DxHGWH6ej3sPEDKBicZ4fp6Pew8Rxnh+no97DxAywYnGeG6ej3tPxHGmG6ej3tPxAywYnGmG6ej3tPxLlHF0pu0KlOb/dnGT9zAvgAAAAAAAAAAAALWJxEKUJVKk4wpxV5Sm1GMVvbZ5TG8JOjabahOpXa6Gm8r6pSsn6jwHCnp6WJxssPGTeHwjyKP0ZV7enP7Wr5fsyveeTovMpX1U4JubjZSV1v27gOr1OFah9DCVn/FOlH8Gy1LhXS//FL+Yj8BzKpUi6cKkbtXyR1KF3q2+irvWtpCUuQDoGN4Was/RoYaNKUGs7qT8qpZo3UY2y2a1N9aNNi+ErEY7DYnDS/R1Y4mEVOgp04ywyh6Uc136Wda7W1PrPGYaqo0nVf0vKV31PXFeyoohoWDjQhf9aV5y65O/wCYGc0tyFluXYUuLgMq3LsIuK3LsK3KNgRcVuXYiLity7ESbINgQlFbl2IhKK3LsRNsgwLbgty7EQlBbl2IuMhIC04LcuxFt047l2IusgwLMqceauxEYxUXePotbHH0Wn9jWwuyLbA99S4WsbQwmDw9HJPEU6daOIqYmFSrmyz/AESUsyzPyetvXr9Zs9GcNleFO2JwcK1W79OjVdCDjyLJJSd/WcorarPmuMvVez90mVkgOwrhyhy6On6sTB/2GRQ4ccI/2mBxUf4JUKn4yRxNkWgPo3RfCxoavJRlXlh5P6zTnTh66muC9bPb06kZJSi1KMknFxaaaexpraj45Z1jgG+UkoV6mjKkm6NSEq2FT2U6sddSEdyknmtsvCW/WHcAAANX8p9LxwWDr4l2vTh6CeyVWTywj65NI2hyfhp0zeVDAxeqK84rdbvGnH/e/ZA5nKpKTcpNynJuUm9spN3bfW7mThKS1Sk4tLNqle7fJqTWq/28hZ0b5OVemqv7NSzSWVzclFXUcq2pu1/sueiWI0ZPNGMI3StLJh5SnDfdZXl6wNDUjaW1f5XdO62XfWWMdJ5JJbZ2pxtyOby397fqMnHVKMqrdBJUkoxjaKjmtduTVtuaUl1JGFUearTjzFOq+v8AUj/ul2ANJ0pToyp01tyR3WhmV7eo1eO0hXoVpRhldP0csZp2XopOzN6VuB53/ENboqfbLxH+Ia3RU+2XieiKAed/xBW6Kn2y8Rx/W6Kn2y8T0JRgef4/q9FD2peI4+qdDD22b5k3Qna+XVa99VrdZc0ed49qdDD22U47qdFD22eieEq2T8nKzSaeXU07Wd92tdqIvCVdf6OeppP0XqbdknuLx+vE157jqfRR9tkZaYqdFD2mb+rhqkU3KnJKLyybi0lLc2Y7JZZ2rTPStTo4e0/EjxnU6OHtPxNwyDINS9JVOjh7T8Sj0hU6OHtPxNqyDA1tGpOpK0rZXGUbRvbWrXuZavZX22V+u2suMiwLbRFlxkWBAydE6RqYTEUcVT/aYerCrH97K9cfWrx9ZjsoB9e6NxsMRRpYim81OtThVg98ZRTX4mScv4B9O+WwVTAzfp4Od6f24eo212SzrqsdQAhWqxhGU5NRhCLlJvZGKV22fMvyg0tLGYmvipXTr1HKKe2NOyUI25LRUUd/+XspR0VpBx/WWExFuvybPnSlTlKMamSVrqWq9t9s0da69TArQpSvFuMsr13dqakltSlLUXsSlqyU8qV8zi8yd3q2OSXLquVxOKq1Ek7pLdKev0nLXv8ASbld3d9ZBVZZMmVrZrzzumk0nt3OWrYrsFtzJEaZbwrzSqz/AH/Jx/hpqz/qcis5eThKbX6kXLsWpEsLScKcIvaorN/E9cve2BeTKkbgCVwUKXAqUZQowDZV1Zc6W7a9m4iRYFfKS25pXsltexbF1al2FPLT50vaf2+L7WRZRl2hKrJ7ZSeq2uTerd1FpkmRZBBkGTZFgQZBlxkGBBkWTZFgQZFouZSji9z7ALTRSxccHufYPJy5suxgeh4N9O+YaUw9Zu1KrLzavuVKrJLM/sjJQl1Jn1AfHeJpThByytbt9+Sx9fYNvydO+3JC/XlQGJ8o6WfBYuG3NhsQu2nI4RovAN4eEqco2cU8s09XVJcnWn1n0LWhmjKL2Si12qxwT5MX80hF7YxSfWlZgeX0rg6qb1R9U/8A4jR1cPX50l1VWvzPZaYWtmr0dg4V6ypzqeTTjUkv1c1SUYtxowzNRU5NZU27XYHm3hqz2yk1dXvVbW3rM7R1adKV6meUW+SanZdTZvsF8n/LLN5eFFOUI5ayjni89ONTNaStl8qmr2clGTSVi4/kvG8U8bh1nlSinblnGm2ms2pryuy+tQm9VrAYGkMfSyZqTWbdKLv2GlemMRzafdz8TL0lhPI1ZU88aiiqbUoq0ZZ6cZ7LvZmt1pmK0BHjnEcyn3c/Ecc4jmU+7n4ixSwDjnEcyn3c/Ecc4jmU+7n4ixQBxziOZT7ufiOOa/Mp93PxBSwDjivzKfdz8RxvX5lPu5+IFgKcbV+ZDu5+JTjWtzId3PxJFLAR40rcyHsT+IcZ1ujh7E/iJWFgIcZVejh7E/iHGNXo4exP4idioFrjCr0cPYn8RssPiYKN5JZ/3Y6/fs7TCsSigLVdVpyzRlOK+2q17kyHkK/PffSMxFQMSNCvzm+urI2WAwlZv6H+acvyiQpm20ataAYnR7/RZ5KTlVpRjGEcsbymkr3bbev7Oo+o4qyS3JI+cYwz4vAU9ufHYFPq84hc+jwBwjRscrxFPmYjEQ9mrJfkd3OH1o5MdpCG7F1/fNy/MDQ6YWtnnK6PSaZWtnnK4GM4rciLitxNluq7Rb3JgYGI0gotqMb25W7K/wBhZ4xlzY+8wpFQMzjCXNj7yvn8ubH3mHYAZnnsty95XzyW5e8xEVQGX529y9486e5e8xUyoGV5y9y9485e5e8xri4GR5y9y9485e5e8x7lLgZHnT3L3lPO3uXvMe5QDJ87luXvHncty95jADJ88e5e8v4bE5tTVnybjXy2PqLtB2kutAbUqUKgXKZt9G7UaimbjRoG/wDk7DPpbRsf+ZUvYhKf9p9BnB/kFTz6bwa5kcRPsoyX5neABxXTscml9JR31aUl/mw1KX4tnajj3y2jl0zX/wCJQw0/6XH+wDyumeU81X2nptMcp5mvtAx2Y+MlanLqMhmHpOVqb+1pAaQqUKKQF6FSXOl2u/UVlUk/pS9cm/xLKAF5VJLll6pNfgV8rLnT9uRYFwLylLknJdTsT8o98l1SaMa4uBfUnvb9fvKym3yvtvfrMe4uBkKb3y9p/gUu73u+2xYuLgX3N86XtMopNcsu1os3AF5t75dolN2et/Zre0s3KMC+/AmmY/lC5GVwN3cqQpO8Yv8AdX4EwLlM3OjjTUzc6OA9jwWwzacT6PBYqXbUox/uO4HHOBqClpLGT5YYWnH26t//AFnYwBybhJhl0tTl0mEh/TUqL8zrJzbhW0dU8vg8XGN6UIVaFVr6EpSjKm39j9NX323gc+0xynma+09Ppc8xiNoGMzA0q/RS3v8AIz5GLiqGdJ/SVtWq2ta7AaRopYz/ADGXNl2Ml5jLmy9lga/KMptFhp81d0ikKMmk8sdetfo1s5ANblGQ2fkJc1d2h5CXNXdoDWZBlNlKjNa1BP8A7ZD0+iXczAwMpXKZ9p9HHuZi0+jj3MwNflGUz7T6Jd1MmqE+WMfVTA1uUZTZeQlzV3aHkJc1d2gNblKZTZSoyVvRWtpfs1y6vAPDS3fdoDWpE6aM1YJ7pdjKwwcr/qvsYGThn6Eez3l1EXBRSSd39LZlu3sXqJAXaZucAaaltNzgtgHSeBCletpGp/0sP/I/zOsHPOBfRdWjhMRiKkcqxddTo32yowpqKn1N57fZZ8p0MAQq0ozi4zipQkmpKSUoyT5GntRMAeP0twc4Gvdxdag30U04ezNSS6lY87X4GqL/AFcbVX8VKnL8LHUgByT5lINq+Ok43WZKgk3HlSefU7cpmPgWwX1vF/6f4Dp4A5h8y2D+t4v7j4B8yuD+uYv7j4Dp4A5f8yuD+uYv7j4CU+BXA39HFYuMbJRjejLKkkrXcNew6cAOX/MpgvrmM+4+AfMpgvrmM+4+A6gAOY0uBXAqScsVjJRT1q9GN1uuoXRslwRaG6Kv/NYj4j3gA8J80ehuir/zeJ+Ip80ehuir/wA1ifiPeADwU+CHQzTSp4hPesVXbXbJo1j4E8FfVi8YlyfsNX9B1AAcu+ZPBfXMZ9x8A+ZPBfXMZ/p/gOogDmEOBTA674rFy1O2ugrS2xlqhrs1sI/MngvrmM+4+A6iAOXfMngvrmM+4+AfMngvreL/ANP8B1EAcu+ZPBfW8W+4/KBhR4EVy4+Xqw6X9514Acqo8CmHX62Orv8Ahp0Y/imel0NwbaNwzUnCeIktnnM88e7SUX60z2AAolbUtSWy3IVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                />

                <Product
                    id="1235"
                    title="Key board"
                    price={8500.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                />

                <Product
                    id="1236"
                    title="Pen Drive"
                    price={3500.00}
                    rating={4}
                    image="data:image/jpeg;base64,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"
                />

            </div>
            <div className='home_pinfo'>
                <Product
                    id="1234"
                    title="Key Board"
                    price={15000.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                />

                <Product
                    id="1235"
                    title="Key board"
                    price={8500.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                />

                <Product
                    id="1236"
                    title="Key Board"
                    price={3500.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                />

                <Product
                    id="1236"
                    title="Key Board"
                    price={3500.00}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMgiB5nidJ058pK8fBf7ySD6XhvQ5-S7nVQ&usqp=CAU"
                />


            </div>

        </div> 
    )
}

export default Home;
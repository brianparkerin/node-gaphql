import {horses} from "../data/horses"
import {sellers} from "../data/sellers"
import {reviews} from "../data/reviews"

export const resolvers = {
    Query: {
        ping() {
            return 'pong'
        },
        horses() {
            return horses
        },
        sellers() {
            return sellers;
        },
        reviews() {
            return reviews;
        },
    },
    Horse: {
        seller: ({seller}) => {
            return sellers.find(s => {
                return s.id == seller
            })
        },
        reviews: (parent) => {
            return reviews.filter(review => {
                return review.horse === parent.id
            })
        }
    },
    Seller: {
        horses(parent) {
            //console.log(parent)
            return horses.filter(horse => {
                return horse.seller === parent.id;
            })
        }
    },
    Review: {
        horse (parent) {
            //console.log(parent.horse)
            return horses.find(horse => {
                return horse.id === parent.horse
            })
        }
    }
}
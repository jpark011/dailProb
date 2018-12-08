function productRest( list ) {
    let productTotal = list.reduce( (acc, cur) => acc * cur, 1 );
    return list.map( ( val ) => productTotal / val );
}
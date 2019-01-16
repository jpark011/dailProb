// Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non - duplicated integer.

// For example, given[6, 1, 3, 3, 3, 6, 6], return 1. Given[13, 19, 13, 13], return 19.

// Do this in O(N) time and O(1) space.
function findOne ( list ) {
    let ones = 0, twos = 0, common_bit_mask;
    for ( let i = 0; i < list.length; i++ ) {
        twos = twos | (ones & list[i]);


        /* XOR the new bits with previous 'ones' to get all bits 
           appearing odd number of times 
  
           Value of 'ones' will be set as 3, 0, 2 and 3 after 1st, 
           2nd, 3rd and 4th iterations respectively */
        ones = ones ^ list[i];


        /* The common bits are those bits which appear third time 
           So these bits should not be there in both 'ones' and 'twos'. 
           common_bit_mask contains all these bits as 0, so that the bits can  
           be removed from 'ones' and 'twos'    
  
           Value of 'common_bit_mask' will be set as 00, 00, 01 and 10 
           after 1st, 2nd, 3rd and 4th iterations respectively */
        common_bit_mask = ~(ones & twos);


        /* Remove common bits (the bits that appear third time) from 'ones' 
              
           Value of 'ones' will be set as 3, 0, 0 and 2 after 1st, 
           2nd, 3rd and 4th iterations respectively */
        ones &= common_bit_mask;


        /* Remove common bits (the bits that appear third time) from 'twos' 
  
           Value of 'twos' will be set as 0, 3, 1 and 0 after 1st, 
           2nd, 3rd and 4th itearations respectively */
        twos &= common_bit_mask; 
    }
    return ones;
}

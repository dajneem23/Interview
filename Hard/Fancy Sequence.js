/* Problem: https://leetcode.com/problems/fancy-sequence/
Description Write an API that generates fancy sequences using the append, addAll, and multAll operations.
Implement the Fancy class:
Fancy() Initializes the object with an empty sequence.
void append(val) Appends an integer val to the end of the sequence.
void addAll(inc) Increments all existing values in the sequence by an integer inc.
void multAll(m) Multiplies all existing values in the sequence by an integer m.
int getIndex(idx) Gets the current value at index idx (0-indexed) of the sequence modulo 109 + 7. If the index is greater or equal than the length of the sequence, return -1.
*/
// Example 1:

// Input
// ["Fancy", "append", "addAll", "append", "multAll", "getIndex", "addAll", "append", "multAll", "getIndex", "getIndex", "getIndex"]
// [[], [2], [3], [7], [2], [0], [3], [10], [2], [0], [1], [2]]
// Output
// [null, null, null, null, null, 10, null, null, null, 26, 34, 20]
// Explanation
// Fancy fancy = new Fancy();
// fancy.append(2);   // fancy sequence: [2]
// fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
// fancy.append(7);   // fancy sequence: [5, 7]
// fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
// fancy.getIndex(0); // return 10
// fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
// fancy.append(10);  // fancy sequence: [13, 17, 10]
// fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
// fancy.getIndex(0); // return 26
// fancy.getIndex(1); // return 34
// fancy.getIndex(2); // return 20


// Code:
// Pass  106 / 107 test cases passed. 
// link Submission Detail : https://leetcode.com/submissions/detail/560085113/
const modulo=10**9 +7;
var Fancy = function() {
        // initialize array numbers
        this.List=[];
        // initialize array Math to save operations
        this.Math=[];
        //initialize index =0
        this.index=0;
};
/** 
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
        // index plus 1 when prototype call
        this.index++;
        // use List.length to add val to List Array
        this.List[this.List.length]={val:val,index:this.index};
        // or spread syntax this.List=[...this.List,{val:val,index:this.index}];
        // or push this.List.push({val:val,index:this.index});
};
/** 
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
        // index plus 1 when prototype call
        this.index++;
        // use Math.length to add inc to Math Array
        this.Math[this.Math.length]={operation:'add',val:inc,index:this.index};
        //or spread syntax this.Math=[...this.Math,{Math:'add',val:inc,index:this.index}];
        //or push  this.Math.push({Math:'add',val:inc,index:this.index});
};
/** 
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
        // index plus 1 when prototype call
        this.index++ ;
       // use Math.length to add m to Math Array
        this.Math[this.Math.length]={operation:'mul',val:m ,index:this.index};
        //  or use spread syntax this.Math=[...this.Math,{Math:'mul',val:m ,index:this.index}];
        //or use push  this.Math.push({Math:'mul',val:m ,index:this.index});
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
          // index plus 1 when prototype call
        this.index++;
        // if(idx>=this.List.length)return -1;   
        // if element idx undefined return -1  
        if(!this.List[idx])return -1;
        // initialize to calculate element idx
        let total=this.List[idx].val;
        // loop through Math array  
        for(v of this.Math){
                // calculate if element idx has index smaller v.index  
                if(v.index>this.List[idx].index){
                        if(v.operation=='add' ){
                          total=(total+v.val)%modulo;
                         }
                        else{
                          total=(total*v.val)%modulo;
                         } 
                }        
        }
        return total
};

/** 
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
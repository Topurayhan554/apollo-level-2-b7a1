**TypeScript ব্লগ - 1**

১. any বনাম unknown: কেন unknown ব্যবহার করা নিরাপদ?

TypeScript-এ যখন আমরা কোনো ভ্যারিয়েবলের টাইপ নিশ্চিত থাকি না, তখন অনেকে সরাসরি any ব্যবহার করি। কিন্তু একে বলা হয় "Type Safety Hole"। কারণ any ব্যবহার করলে TypeScript ওই ভ্যারিয়েবলের ওপর সব ধরনের টাইপ চেকিং বন্ধ করে দেয়। ফলে রানটাইমে (runtime) কোড ক্রাশ করার সম্ভাবনা বেড়ে যায়।

অন্যদিকে, unknown হচ্ছে any এর একটি নিরাপদ বিকল্প। এটি আমাদের বাধ্য করে ডাটা ব্যবহারের আগে তার টাইপ চেক করতে। একে বলা হয় Type Narrowing।
<br><br>

Code Examples:

// 'any' ব্যবহার করলে ভুল ধরা পড়ে না, যা বিপজ্জনক
let dataAny: any = "Hello World";
<br>
console.log(dataAny.toFixed(2)); // রানটাইমে ভুল হবে, কিন্তু কম্পাইল টাইমে কোনো এরর নেই। 
<br>

// 'unknown' ব্যবহার করলে টাইপ চেক করতে বাধ্য করে <br>
let dataUnknown: unknown = "Hello TypeScript";
<br>
// টাইপ ন্যারোইং (Type Narrowing)
<br>
if (typeof dataUnknown === "string") { 
<br>
console.log(dataUnknown.toUpperCase()); // এখন এটি নিরাপদ
<br>
}
<br>
else if (typeof dataUnknown === "number") {
<br>
console.log(dataUnknown.toFixed(2));
}
<br><br>
মুলকথা হলো যে, অনিশ্চিত ডাটার ক্ষেত্রে any এর বদলে unknown ব্যবহার করলে কোডে ভুল হওয়ার ভয় থাকে না।

fn main() {
    println!("Hello, world!");
    let x = 4;
    println!("{}", x);

    let mut y = 4;

    y = 10;

    println!("{:?}", y);

    let t = (1, 3, 'j', 3);

    println!("{:?}", t);
    let (x, y, z, _) = t;

    let indexing = t.0;

    let a = [1, 3, 4, 5, 6];
    let a1 = a[0];

    let arrayslice = &a[0..];

    println! {"{:#?}", arrayslice }
    println! {"{:#?}", arrayslice.len()};

    let s = "string";

    let ss = String::from("hi");

    let slice: &str = &ss[0..2];
    println!("{}", slice)
}

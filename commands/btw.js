import figlet from 'figlet';
import { pastel, passion } from 'gradient-string';

export default function btw() {
    figlet('b t w _ c l i', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(pastel.multiline(data));
        console.log(passion(`\n ~ Crafted by prana-W\n`));
        console.log(
            " Welcome to btw_cli! Type 'btw -h' to see available commands.",
        );
    });
}

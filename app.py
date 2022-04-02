from flask import *


app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def home():
    return render_template('index.html')

@app.route('/color-converter/', methods=['GET', 'POST'])
def color_Converter():
    value='000'
    if request.method=='POST':
        red = int(request.form['red'])
        green = int(request.form['green'])
        blue = int(request.form['blue'])
        def rgb_to_hex(r, g, b):
            return ('{:X}{:X}{:X}').format(r, g, b)
        value = rgb_to_hex(red, green, blue)
        print(value)
    return render_template('color-converter.html', value=f'#{value}')

@app.route('/webcalc/', methods=['GET', 'POST'])
def webcalc():
    if request.method == 'POST':
        equation = str(request.form['equation'])
        result = str(eval(equation))
        return render_template('webcalc.html', result=f'Result: {result}')

    return render_template('webcalc.html')

if __name__ == '__main__':
    app.run(debug=True)
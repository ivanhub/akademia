<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use yii\db\ActiveRecord;

/**
 * ContactForm is the model behind the contact form.
 */
class ContactForm extends Model
{
    public $name;
    public $phone;
    public $body;
    public $pack;
    public $from;



     public static function tableName()
    {
        return 'forma';
    }

  
    public function rules()
    {
        return [
            [['name', 'phone', 'from'], 'required'],
            [['phone', 'from'], 'integer'],
            [['body'], 'string'],
            [['name', 'pack'], 'string', 'max' => 30],
            [['date'], 'safe'],
   [['phone'], 'string', 'max' => 20],
            [['phone'], 'match', 'pattern' => '/^(?:(?:\+?\d\s*(?:[.-]\s*)?)?(?:\(\s*([0-9][0-9][0-9])\s*\)|([0-9][0-9][0-9]))\s*(?:[.-]\s*)?)?([0-9][0-9][0-9]|[0-9][0-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|д\.?|доб\.?|добавочный)\s*(\d+))?$/','message' => 'Неверный формат номера телефона'],            ['name', 'match', 'pattern' => '/^[a-z]\w*$/i']    


        ];
    }

   
    public function attributeLabels()
    {
        return [
            'Id' => 'ID',
            'name' => 'Name',
            'phone' => 'Phone',
            'body' => 'Body',
            'from' => 'From',
            'pack' => 'Pack',
            'date' => 'Date',

        ];
    }
    /**
     * Sends an email to the specified email address using the information collected by this model.
     *
     * @param string $email the target email address
     * @return bool whether the email was sent
     */
    public function sendEmail()
    {
    if(Yii::$app->mailer->compose(  ['html' => 'html', 'text' => 'text'],['body' => $this->body, 'phone' => $this->phone, 'name'=>$this->name])
    ->setFrom(Yii::$app->params['supportEmail'])
    ->setTo(Yii::$app->params['adminEmail'])
    ->setSubject('Заявка с сайта Росавтоакадемия.РФ' )
    ->send())
        { return true; }
            else {
            return false;
        }
    }


   /*     return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom('test@gmail.com')
            ->setSubject('Заявка с сайта')
            ->setTextBody($this->body)
            ->send();*/
/* public function contact($email)
    {
        if ($this->validate()) {
            Yii::$app->mailer->compose()
                ->setTo($email)
                ->setFrom('bubu@bubuka.com')
            ->setSubject('Заявка с сайта')
                ->setTextBody($this->body)
                ->send();

            return true;
        } else {
            return false;
        }
    }*/

public function saveform()
{
    if ($this->validate()) {
        $form = new Forma();
        $form->name = $this->name;
        $form->phone = $this->phone;
        $form->body = $this->body;
        $form->from = $this->from;
        $form->save();
/*
if($form->save()) { echo 'URA'; } else { echo 'NO URA'; }
dd($form->save());
print_r( $form->getErrors());
die();
*/

return true;
} else {
return false;
}
}

  

}

<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use yii\db\ActiveRecord;


/**
 * ContactForm is the model behind the contact form.
 */
class ContactForm2 extends \yii\db\ActiveRecord
{
    public $name;
    public $email;
    public $subject;
    public $body;
    public $verifyCode;


    /**
     * @inheritdoc
     */
   

    /**
     * @inheritdoc
     */
  
    /**
     * Sends an email to the specified email address using the information collected by this model.
     *
     * @param string $email the target email address
     * @return bool whether the email was sent
     */
    public function sendEmail($email)
    {
        return Yii::$app->mailer->compose()
            ->setTo($email)
            ->setFrom([$this->email => $this->name])
            ->setSubject($this->subject)
            ->setTextBody($this->body)
            ->send();
    }




public function contact($email)
{
if ($this->validate()) {
$form = new Form();
$form->name = $this->name;
$form->email = $this->email;
$form->subject = $this->subject;
$form->body = $this->body;
$form->save();

return true;
} else {
return false;
}
}

  

}
